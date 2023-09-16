import { configureStore } from '@reduxjs/toolkit'
import currentUserReducer from './slice/currentUserSlice'
import { authApi } from '@api/auth.api'
import { usersApi } from '@api/users.api'

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, usersApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
