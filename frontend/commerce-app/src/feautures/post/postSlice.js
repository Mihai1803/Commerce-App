import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from "./postService"


// get existing post from localstorage
const post = JSON.parse(localStorage.getItem('post'))
const landingPosts = JSON.parse(localStorage.getItem('landingPosts'))
const singlePost = JSON.parse(localStorage.getItem('singlePost'))

const initialState = {
  post: post ? post : null,
  landingPosts: landingPosts ? landingPosts : null,
  singlePost: singlePost ? singlePost : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ' ' 
}


export const createPost = createAsyncThunk('post/create', async(post, thunkAPI) => {
  try {
    return await postService.createPost(post)
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

export const getPosts = createAsyncThunk('post/get', async(thunkAPI) => {
  try {
    return await postService.getPosts()
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

export const getPostById = createAsyncThunk('post/single/get', async(postId, thunkAPI) => {
  try {
    return await postService.getPostById(postId)
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

export const postSlice = createSlice({
  name:'post',
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
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Post created'
        state.post = action.payload
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.post = null
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Post fatched'
        state.landingPosts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.landingPosts = null
      })
      .addCase(getPostById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = 'Post fatched'
        state.singlePost = action.payload
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.singlePost = null
      })
  }
})

export const { reset } = postSlice.actions
export default postSlice.reducer