import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))
const userItems = JSON.parse(localStorage.getItem('userItems'))

const initialState = {
  user: user ? user : null,
  userItems: userItems ? userItems : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}


// register new user
export const register = createAsyncThunk('auth/register', async(user, thunkAPI) => {
  try {
    return await authService.register(user)
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

// login user
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
  try {
    return await authService.login(user)
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

// get user items
export const getUserItems = createAsyncThunk('user/getUserItems', async(userId, thunkAPI) => {
  try {
    return await authService.getUserItems(userId)
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

// delete item
export const deleteItem = createAsyncThunk('user/deleteItem', async(itemId, thunkAPI) => {
  try {
    return await authService.deleteItem(itemId)
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

// logout
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout()
})


export const authSlice = createSlice({
  name:'auth',
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
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Registered'
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Logged In'
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Logged Out'
        state.user = null
      })
      .addCase(getUserItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Items fatched'
        state.userItems = action.payload
      })
      .addCase(getUserItems.rejected, (state,action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.userItems = null
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = action.payload
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
      })
  }

})

export const { reset } = authSlice.actions
export default authSlice.reducer