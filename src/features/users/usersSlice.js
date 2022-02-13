/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const UsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    add: (state, action) => {
      state.users.push(...action.payload)
    },
    clear: (state) => {
      state.users = []
    },
    remove: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload)
    },
  },
})

export const { add, clear, remove } = UsersSlice.actions
export default UsersSlice.reducer
