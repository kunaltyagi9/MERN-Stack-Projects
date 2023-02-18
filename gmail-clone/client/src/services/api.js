import axios from 'axios';

const API_URI = 'http://localhost:8000'

const API_GMAIL = async (serviceUrlObject, requestData = {}) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}`,
        data: requestData
    })
}

export default API_GMAIL;