import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSclice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
