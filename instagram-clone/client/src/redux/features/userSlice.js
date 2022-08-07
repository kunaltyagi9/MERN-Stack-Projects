import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        email: '',
        name: '',
        username: '',
        password: '',
        followers: [],
        following: [],
        url: ''
    },
    users: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.user = action.payload;
        },
        userSignup: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const { userLogin, userSignup, logout, setUsers } = userSlice.actions;

export const getUser = (state) => state.user.user;
export const getUsers = (state) => state.user.users;

export default userSlice.reducer;