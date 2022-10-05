import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getAllProfile = createAsyncThunk('profile/all', async page => {
  const results = {};
  const pages = page ? page : 1;
  console.log(page + ' ini pages');
  try {
    const {data} = await http().get(
      `admin/profiles?page=${pages}&sorting=asc&sortBy=fullname`,
    );
    results.data = data.results;
    results.pageInfo = data?.pageInfo;
    results.message = data.message;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});

export const transfer = createAsyncThunk(
  'authenticated/transfer',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      console.log(send + ' ini send');
      console.log(token + ' ini token');
      const {data} = await http(token).post('authenticated/transfer', send);
      console.log(data);
      results.data = data.results;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e.response.data.message);
      results.error = e.response.data.message;
      return results;
    }
  },
);

export const topUp = createAsyncThunk(
  'authenticated/topup',
  async ({token, request}) => {
    const results = {};
    try {
      const send = qs.stringify(request);
      const {data} = await http(token).post('authenticated/topup', send);
      console.log(data);
      results.data = data.message;
      results.message = data.message;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);

export const getHistoryTransaction = createAsyncThunk(
  'authenticated/historyTransactions',
  async ({token, page, sort}) => {
    const results = {};
    try {
      const sorted = sort ? sort : 'DESC';
      const pages = page ? page : 1;
      const {data} = await http(token).get(
        `authenticated/historyTransactions?page=${pages}&sorting=${sorted}&limit=10`,
      );
      results.data = data.results;
      results.message = data.message;
      results.pageInfo = data.pageInfo;
      return results;
    } catch (e) {
      console.log(e);
      return e;
    }
  },
);
