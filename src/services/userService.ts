import { User } from '@custom_types/user'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser } from '@store/slice/currentUserSlice'

export const userService = createApi({
  reducerPath: 'userService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users', credentials: 'include' }),
  endpoints: (builder) => ({
    me: builder.query<User, null>({
      query: () => ({
        url: 'me'
      }),
      transformResponse: (response: User) => response,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(setUser(data))
        } catch (err) {
          console.log(err)
        }
      }
    })
  })
})

export const { useMeQuery } = userService
