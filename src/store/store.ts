import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import currentUserReducer from './slice/currentUserSlice'
import { authService } from '@services/authService'
import { userService } from '@services/userService'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentUser: currentUserReducer,
    [authService.reducerPath]: authService.reducer,
    [userService.reducerPath]: userService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authService.middleware, userService.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
