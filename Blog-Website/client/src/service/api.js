import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getRefreshToken, setAccessToken } from '../utils/common-utils';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config) {
        console.log(config);
        if (config.TYPE === 'params') {
            config.params = config.data;
        } else if (config.TYPE === 'query') {
            console.log('Ho', config.url, config.data)
            config.url = config.url + '/' + config.data;
        }
        console.log(config);
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        // Stop global loader here
        return processResponse(response);
    },
    function(error) {
        // Stop global loader here
        return Promise.reject(ProcessError(error));
    }
)

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }
//////////////////////////////
const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

///////////////////////////////
// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isError: true, status: string, msg: string, code: int }
//////////////////////////////
const ProcessError = async (error) => {
    if (error.response) {
        // Request made and server responded with a status code 
        // that falls out of the range of 2xx
        if (error.response?.status === 403) {
            // const { url, config } = error.response;
            // console.log(error);
            // try {
            //     let response = await API.getRefreshToken({ token: getRefreshToken() });
            //     if (response.isSuccess) {
                    sessionStorage.clear();
            //         setAccessToken(response.data.accessToken);

            //         const requestData = error.toJSON();

            //         let response1 = await axios({
            //             method: requestData.config.method,
            //             url: requestData.config.baseURL + requestData.config.url,
            //             headers: { "content-type": "application/json", "authorization": getAccessToken() },
            //             params: requestData.config.params
            //         });
            //     }
            // } catch (error) {
            //     return Promise.reject(error)
            // }
        } else {
            console.log("ERROR IN RESPONSE: ", error.toJSON());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status
            }
        }
    } else if (error.request) { 
        // The request was made but no response was received
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else { 
        // Something happened in setting up the request that triggered an Error
        console.log(error)
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: value.params ? 'params' : value.query ? 'query' : '',
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };

// const headers = {
//     "content-type": "application/json",
//     "authorization": sessionStorage.getItem("accessToken")
// }

// export const uploadFile = async (post) => {
//     try {
//         return await axios.post(`${url}/file/upload`, post);
//     } catch (error) {
//         console.log('Error while calling uploadFile API ', error);
//     }
// }

// export const createPost = async (post) => {
//     try {
//         return await axios.post(`${url}/create`, post, { headers: headers });
//     } catch (error) {
//         console.log('Error while calling createPost API ', error);
//     }
// }

// export const getAllPosts = async (param) => {
//     try {
//         let response = await axios.get(`${url}/posts${param}`, { headers: headers });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling getPosts API ', error)
//     }
// }

// export const getPost = async (id) => {
//     try {
//         let response = await axios.get(`${url}/post/${id}`, { headers: headers });
//         return response.data;
//     } catch (error) {
//         console.log('Error while calling getPost API ', error);
//     }
// }

// export const updatePost = async (id, post) => {
//     try {
//         return await axios.put(`${url}/update/${id}`, post, { headers: headers });
        
//     } catch(error) {
//         console.log('Error while calling updatePost API ', error)
//     }
// }

// export const deletePost = async (id) => {
//     try {
//         return await axios.delete(`${url}/delete/${id}`, { headers: headers });
//     } catch(error) {
//         console.log('Error while calling deletePost API ', error)
//     }
// }


// export const newComment = async (comment) => {
//     try {
//         return await axios.post(`${url}/comment/new/`, comment, { headers: headers });
//     } catch(error) {
//         console.log('Error while calling newComment API ', error)
//     } 
// }

// export const getComments = async (id) => {
//     try {
//         let response = await axios.get(`${url}/comments/${id}`, { headers: headers });
//         return response.data;
//     } catch(error) {
//         console.log('Error while calling getComments API ', error)
//     } 
// }

// export const deleteComment = async (id) => {
//     try {
//         return await axios.delete(`${url}/comment/delete/${id}`, { headers: headers });
//     } catch(error) {
//         console.log('Error while calling deleteComments API ', error)
//     } 
// }