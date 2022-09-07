import axios from 'axios';

const url = 'http://192.168.43.196:3333/';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: url,
  });
};

export default http;
