import axios from 'axios';
import {BACKEND_URL} from '@env';
// const url = 'http://192.168.43.196:3333/';

const http = token => {
  const headers = {};
  console.log(BACKEND_URL);
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: BACKEND_URL,
  });
};

export default http;
