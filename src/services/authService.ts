import { CurrentUser } from '@custom_types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userService } from './userService'

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/auth',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<CurrentUser, { email: string; password: string }>({
      query: (payload) => ({
        url: '/login',
        method: 'POST',
        body: payload
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          await dispatch(userService.endpoints.me.initiate(null))
        } catch (err) {
          console.log(err)
        }
      }
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        credentials: 'include'
      })
    })
  })
})

export const { useLoginMutation } = authService
