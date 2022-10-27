import axios from 'axios';

import { API_URL } from '../constants/route';


export const signupUser = async (data) => {
    try {
        return await axios.post(`${API_URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup User API ', error);
        return error.response;
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${API_URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login User API ', error);
        return error.response;
    }
}

export const getAllUsers = async () => {
    try {
        return await axios.get(`${API_URL}/users`);
    } catch (error) {
        console.log('Error while calling getAllUsers API ', error);
        return error.response;
    }
}

export const getUserByUsername = async (data) => {
    try {
        let user = await axios.post(`${API_URL}/user`, data);
        return user.data;
    } catch (error) {
        console.log('Error while calling  getUser API ', error);
        return error.response;
    }
}

export const followUser = async (data) => {
    try {
        return await axios.post(`${API_URL}/follow`, data);
    } catch (error) {
        console.log('Error while calling login User API ', error);
        return error.response;
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${API_URL}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling uploadFile API ', error);
    }
}

export const savePost = async (data) => {
    try {
        return await axios.post(`${API_URL}/post/save`, data);
    } catch (error) {
        console.log('Error while calling savePost API ', error);
    }
}