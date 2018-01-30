import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://vigilant-memory-api.herokuapp.com'
});

export const GET_LINKS = () => instance.get('/links');

export const GET_LINK = uuid =>  instance.get(`/link/${uuid}`);

export const GET_LINK_INFO = uri =>  instance.post(`/page-info`, {uri});

export const UPDATE_LINK = (uuid, data) =>  instance.patch(`/link/${uuid}`, data);

export const DELETE_LINK = uuid =>  instance.delete(`/link/${uuid}`);
