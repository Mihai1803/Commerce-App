import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createService from "./createService";

const initialState = { 
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}

export const createItem = createAsyncThunk('post/create/item', async(itemData, thunkAPI) => {
  try {
    return await createService.createItem(itemData)
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


export const createItemSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    resetCreate: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ' '
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Item created'
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message =  action.payload
      })
  }
})

export const { resetCreate } = createItemSlice.actions
export default createItemSlice.reducer