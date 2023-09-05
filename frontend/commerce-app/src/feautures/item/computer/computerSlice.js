import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import computerService from "./computerService"

const computers = JSON.parse(localStorage.getItem('computers'))


const initialState = {
  computers: computers ? computers : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}


export const getComputers = createAsyncThunk('get/computer', async(thunkAPI) => {
  try {
    return await computerService.getComputers()
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


export const computerSlice = createSlice({
  name:'computer',
  initialState,
  reducers: {
    resetComputer: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ' '
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComputers.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getComputers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Computers fatched'
        state.computers = action.payload
      })
      .addCase(getComputers.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.computers = null
      })
  }
})

export const { resetComputer } = computerSlice.actions
export default computerSlice.reducer