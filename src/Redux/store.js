import { configureStore } from '@reduxjs/toolkit'
import validReducer from './validSlice'

export const store = configureStore({
  reducer: {
    poll: validReducer,
  },
})