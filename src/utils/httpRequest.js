import axios from 'axios';
import queryString from 'query-string';

import PropTypes from 'prop-types';
const httpRequest = axios.default.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,

    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },

    paramsSerializer: (params) => queryString.stringify({ ...params, api_key: '727a199da3a9f0d856b794991e4182c9' }),
});
httpRequest.interceptors.request.use(async (config) => config);

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
get.prototypes = {
    path: PropTypes.string,
    option: PropTypes.object,
};
export default httpRequest;
