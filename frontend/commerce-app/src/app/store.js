import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../feautures/auth/authSlice'
import postReducer from '../feautures/post/postSlice'
import phoneReducer from '../feautures/item/phone/phoneSlice'
import computerReducer from '../feautures/item/computer/computerSlice'
import laptopReducer from '../feautures/item/laptop/laptopSlice'
import watchReducer from '../feautures/item/watch/watchSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    phone: phoneReducer,
    computer: computerReducer,
    laptop: laptopReducer,
    watch: watchReducer
  }
})