import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feautures/auth/authSlice'
import postReducer from '../feautures/post/postSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer
  }
})