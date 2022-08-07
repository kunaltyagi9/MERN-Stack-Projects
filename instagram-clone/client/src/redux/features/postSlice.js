import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: {}
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        updatePost: (state, action) => {
            state.post = action.payload;
        }
    }
})

export const { updatePost } = postSlice.actions;

export default postSlice.reducer;