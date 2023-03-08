import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from '../../api/product'

// Add New Product
export const addProduct = createAsyncThunk('product/add', async (data, thunkAPI) => {
    try {
        return await productApi.addProduct(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Products
export const getProducts = createAsyncThunk('product/all', async (thunkAPI) => {
    try {
        return await productApi.getProdcuts()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})