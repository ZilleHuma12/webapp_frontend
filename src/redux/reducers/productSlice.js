import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'
import { addProduct, getProducts} from '../actions/productAction'

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => {
            state.products = []
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload.message
                state.products.push(action.payload)
                notification.open({
                    type: "success",
                    message: "Product added successfully!",
                    placement: "top"
                })
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload.message === 'No Product Found!' ? [] : action.payload
                state.message = action.payload.message
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
            })
    }
})

export const { reset } = productSlice.actions

export default productSlice.reducer