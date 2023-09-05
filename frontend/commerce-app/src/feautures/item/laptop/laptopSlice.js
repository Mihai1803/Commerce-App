import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import laptopService from "./laptopService"

const laptops = JSON.parse(localStorage.getItem('laptops'))


const initialState = {
  laptops: laptops ? laptops : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}


export const getLaptops = createAsyncThunk('get/laptop', async(thunkAPI) => {
  try {
    return await laptopService.getLaptops()
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


export const laptopSlice = createSlice({
  name:'laptop',
  initialState,
  reducers: {
    resetLaptop: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ' '
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLaptops.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getLaptops.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Laptop fatched'
        state.laptops = action.payload
      })
      .addCase(getLaptops.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.laptops = null
      })
  }
})

export const { resetLaptop } = laptopSlice.actions
export default laptopSlice.reducer