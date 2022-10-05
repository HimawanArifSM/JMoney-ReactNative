import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const getUserLogin = createAsyncThunk(
  'authenticated/login',
  async token => {
    const results = {};
    try {
      const {data} = await http(token).get('authenticated/profiles');
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const updatePhone = createAsyncThunk(
  'authenticated/phone',
  async request => {
    const token = request.token;
    const results = {};
    console.log(request);
    try {
      const send = qs.stringify(request);
      console.log(send);
      const {data} = await http(token).patch('authenticated/phone', send);
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const changePassword = createAsyncThunk(
  'authenticated/changePassword',
  async request => {
    const token = request.token;
    const results = {};
    console.log(request);
    try {
      const send = qs.stringify(request);
      console.log('ini send ' + send);
      const {data} = await http(token).patch(
        'authenticated/changePassword',
        send,
      );
      console.log(data);
      // results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const checkPin = createAsyncThunk(
  'authenticated/checkPin',
  async request => {
    const token = request.token;
    const results = {};
    console.log('ini request' + request);
    try {
      const send = qs.stringify(request);
      console.log('ini send ', send);
      const {data} = await http(token).post('authenticated/checkPin', send);
      console.log(data);
      // results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const updatePin = createAsyncThunk(
  'authenticated/updatePin',
  async request => {
    const token = request.token;
    const results = {};
    console.log('ini request' + request);
    try {
      const send = qs.stringify(request);
      console.log('ini send ', send);
      const {data} = await http(token).patch('authenticated/updatePin', send);
      console.log(data);
      // results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const updateProfile = createAsyncThunk(
  'authenticated/update-profile',
  async request => {
    const token = request.token;
    const results = {};
    console.log('ini request' + request);
    try {
      const send = qs.stringify(request);
      console.log('ini send ', send);
      const {data} = await http(token).patch('authenticated/profiles', send);
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const updatePhoto = createAsyncThunk(
  'authenticated/update-photo',
  async ({token, request}) => {
    const results = {};
    console.log('ini request' + request);
    try {
      const form = new FormData();
      form.append('picture', {
        uri: request.uri,
        name: request.name,
        type: request.type,
      });
      const {data} = await http(token).patch('authenticated/profiles', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
