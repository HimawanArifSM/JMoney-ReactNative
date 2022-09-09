import {createSlice} from '@reduxjs/toolkit';
import {getUserLogin} from '../actions/profile';

const initialState = {
  data: {},
  errormsg: '',
  successmsg: '',
};

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetmsg: state => {
      state.successmsg = null;
      state.errormsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getUserLogin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getUserLogin.fulfilled, (state, action) => {
      state.data = action.payload?.data;
    });
  },
});

export default profile.reducer;
export {getUserLogin};
export const {resetmsg} = profile.actions;
