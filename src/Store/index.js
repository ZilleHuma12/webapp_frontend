import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/reducers/authSlice'
import productSlice from '../redux/reducers/productSlice'

export const store = configureStore({
    reducer: {
        product: productSlice,
        auth: authSlice
    },
  })