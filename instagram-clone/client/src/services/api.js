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
        console.log('Error while calling login User API ', error);
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