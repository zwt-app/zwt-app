import axios from 'axios';

const api = axios.create({
    baseURL: 'https://zwt-api.herokuapp.com/',
});

export default api;