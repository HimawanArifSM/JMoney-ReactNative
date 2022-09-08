import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

export const getAllProfile = createAsyncThunk('profile/all', async () => {
  const results = {};
  try {
    const {data} = await http().get('admin/profiles');
    results.data = data.results;
    results.page = data?.pageInfo;
    results.message = data.message;
    return results;
  } catch (e) {
    console.log(e);
    return e;
  }
});
