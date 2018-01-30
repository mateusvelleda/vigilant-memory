import axios from './';

console.log(axios);

export const GET_LINKS = () => '/links';
export const GET_LINK_DATA = uuid =>  `/link/${uuid}`;

export const LIST = () => '/links';
export const DATA = uuid =>  `/link/${uuid}`;
