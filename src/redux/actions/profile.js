import {createAsyncThunk} from '@reduxjs/toolkit';
import qs from 'qs';
import http from '../../helpers/http';

export const getUserLogin = createAsyncThunk(
  'authenticated/login',
  async token => {
    const results = {};
    try {
      const {data} = await http(token).get('authenticated/profiles');
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

// export const updatePhone = createAsyncThunk(
//   'authenticated/phone',
//   async request => {
//     const results = {};
//     console.log(request);
//     try {
//       const send = qs.stringify(request.phonenumber);
//       console.log(send);
//       const {data} = await http(request.token).patch(
//         'authenticated/phone',
//         send,
//       );
//       console.log(data);
//       results.data = data.results;
//       results.message = data.message;
//       return results;
//     } catch (e) {
//       results.error = e.response.data.message;
//       return results;
//     }
//   },
// );

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

// export const updatePassword = createAsyncThunk(
//   'authenticated/changePassword',
//   async token => {
//     const results = {};
//     try {
//       const {data} = await http(token).get('authenticated/changePassword');
//       results.data = data.results;
//       results.message = data.message;
//       return results;
//     } catch (e) {
//       console.log(e);
//       return e;
//     }
//   },
// );
