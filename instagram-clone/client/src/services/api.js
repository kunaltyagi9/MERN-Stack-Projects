import axios from 'axios';

const URL = 'http://localhost:8000';


export const signupUser = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup User API ', error);
        return error.response;
    }
}

export const loginUser = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login User API ', error);
    }
}
