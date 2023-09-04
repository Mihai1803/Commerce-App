import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feautures/auth/authSlice'
import postReducer from '../feautures/post/postSlice'
import phoneReducer from '../feautures/item/phone/phoneSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    phone: phoneReducer
  }
})