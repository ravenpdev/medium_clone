import { IUser } from '@api/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

type CurrentUser = Omit<IUser, 'password'>

export interface CurrentUserState {
  user: CurrentUser | null
}

const initialState: CurrentUserState = {
  user: null
}

export const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<CurrentUser | null>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = currentUserSlice.actions

export const selectCurrentUser = (state: RootState) => state.currentUser.user

export default currentUserSlice.reducer
