import Axios from 'axios';

export const tripTourApi = Axios.create({
    baseURL: 'https://triptour.v1r.ir/api/',
});