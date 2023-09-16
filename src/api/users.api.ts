import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setUser } from '@store/slice/currentUserSlice'
import { IUser } from './types'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users', credentials: 'include' }),
  endpoints: (builder) => ({
    me: builder.query<IUser, null>({
      query: () => ({
        url: 'me'
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...rest } = data
          dispatch(setUser(rest))
        } catch (err) {
          // console.log(err)
        }
      }
    })
  })
})

export const { useMeQuery } = usersApi
