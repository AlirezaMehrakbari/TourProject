import Axios from 'axios';

export const tripTourApi = Axios.create({
    baseURL: 'https://triptour.v1r.ir/api/',
});

tripTourApi.interceptors.response.use((res) => {
        return res
    }, (error) => {
        if (error.response.status === 401) {
            return window.location.href = '/'
        }
        return Promise.reject(error)
    }
)
tripTourApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    }
)
