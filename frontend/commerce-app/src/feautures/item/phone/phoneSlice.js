import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import phoneService from "./phoneService"

const phones = JSON.parse(localStorage.getItem('phones'))
const singlePhone = JSON.parse(localStorage.getItem('singlePhone'))

const initialState = {
  phones: phones ? phones : null,
  singlePhone: singlePhone ? singlePhone : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}

export const getPhones = createAsyncThunk('get/phone', async(thunkAPI) => {
  try {
    return await phoneService.getPhones()
  } catch (error) {
    const message =
    (error.response && error.response.data && error.response.data.message)
    ||
    error.message
    ||
    error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getPhoneById = createAsyncThunk('post/single/get', async(phoneId, thunkAPI) => {
  try {
    return await phoneService.getPhoneById(phoneId)
  } catch (error) {
    const message =
    (error.response && error.response.data && error.response.data.message)
    ||
    error.message
    ||
    error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const phoneSlice = createSlice({
  name:'phone',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ' '
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhones.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPhones.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Phones fatched'
        state.phones = action.payload
      })
      .addCase(getPhones.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.phones = null
      })
      .addCase(getPhoneById.pending, (state) => {
        state.isLoading = false
      })
      .addCase(getPhoneById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Phone fatched'
        state.singlePhone = action.payload
      })
      .addCase(getPhoneById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.singlePhone = null
      })

  }
})

export const { reset } = phoneSlice.actions
export default phoneSlice.reducer