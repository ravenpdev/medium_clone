import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@custom_types/user'

export interface CurrentUserState {
  user: User | null
  isLoggedIn: boolean
}

const initialState: CurrentUserState = {
  user: null,
  isLoggedIn: false
}

export const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      // state.user = action.payload
      // state.isLoggedIn = true
      state.user = action.payload
      state.isLoggedIn = true
    }
  }
})

export const { setUser } = currentUserSlice.actions

export default currentUserSlice.reducer
