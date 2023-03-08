import { createAsyncThunk } from '@reduxjs/toolkit'
import authApi from '../../api/auth'


// Register new user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    console.log('user data in action..', user)
    try {
        return await authApi.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log('messaage', message)
        return thunkAPI.rejectWithValue(message)
    }
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authApi.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log('messaage', message)
        return thunkAPI.rejectWithValue(message)
    }
})
// get user
export const getUser = createAsyncThunk('user/get', async (user, thunkAPI) => {
    try {
        return await authApi.getUser(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        console.log('messaage', message)
        return thunkAPI.rejectWithValue(message)
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authApi.logout()
})
