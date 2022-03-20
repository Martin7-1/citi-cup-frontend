import axios from 'axios';


export const register = (payload) => {
    // payload = JSON.stringify(payload);
    return axios.post(`/api/user/register`,  payload)
        .then(res =>{
            console.log(res);
            console.log(res.data);
            return res.data;})
        .catch(err => console.log(err));
}

export const login = (payload) => {
    return axios.post(`/api/user/login`, payload)
        .then(res =>{
            console.log(res.data);
            return res.data;})
        .catch(err => console.log(err));
}