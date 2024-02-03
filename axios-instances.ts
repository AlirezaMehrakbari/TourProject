import Axios from 'axios';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
export const tripTourApi = Axios.create({
    baseURL: 'https://triptour.v1r.ir/api/',
});
tripTourApi.interceptors.response.use((res) => {
        return res
    }, (error) => {
        if (error.response.status === 401) {
            storage.removeItem('persist:root')
            location.reload()
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
