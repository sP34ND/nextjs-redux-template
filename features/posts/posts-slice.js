import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts-api";

const initialState =
{
    posts: { data: [], loading: false, error: null },
};

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { getState, rejectWithValue }) => {
    try {
        const response = await fetchPosts();
        return response;
    } catch (err) {
        return rejectWithValue(err.message);
    }
});

const handleGetPosts = {
    [getPosts.pending]: (state, action) => {
        state.posts.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
        state.posts.data = action.payload;
        state.posts.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
        state.posts.loading = false;
        state.error = action.payload;
    }
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        ...handleGetPosts
    }
});

export default postsSlice.reducer;