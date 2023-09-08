import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import watchService from "./watchService"

const watches = JSON.parse(localStorage.getItem('watches'))
const singleWatch = JSON.parse(localStorage.getItem('singleWatch'))


const initialState = {
  watches: watches ? watches : null,
  singleWatch: singleWatch ? singleWatch : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}


export const getWatches = createAsyncThunk('get/watch', async(thunkAPI) => {
  try {
    return await watchService.getWatches()
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

export const getWatchById = createAsyncThunk('get/single/watch', async(watchId, thunkAPI) =>{
  try {
    return await watchService.getWatchById(watchId)
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


export const watchSlice = createSlice({
  name:'watch',
  initialState,
  reducers: {
    resetWatch: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ' '
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWatches.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getWatches.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Watches fatched'
        state.watches = action.payload
      })
      .addCase(getWatches.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.watches = null
      })
      .addCase(getWatchById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getWatchById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Watch fatched'
        state.singleWatch = action.payload
      })
      .addCase(getWatchById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.singleWatch = null
      })
  }
})

export const { resetWatch } = watchSlice.actions
export default watchSlice.reducer