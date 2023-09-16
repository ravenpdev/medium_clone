import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { usersApi } from './users.api'
import { setUser } from '@store/slice/currentUserSlice'

interface LoginResponse {
  email: string
  username: string
  token: string
}

interface LoginPayload {
  email: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          await dispatch(usersApi.endpoints.me.initiate(null))
        } catch (err) {
          console.log(err)
        }
      }
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POSt',
        credentials: 'include'
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(setUser(null))
        } catch (err) {
          console.log(err)
        }
      }
    })
  })
})

export const { useLoginMutation, useLogoutMutation } = authApi
