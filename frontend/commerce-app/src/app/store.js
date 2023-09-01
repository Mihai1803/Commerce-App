import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feautures/auth/authSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})