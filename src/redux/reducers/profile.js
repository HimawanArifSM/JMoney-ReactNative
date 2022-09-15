import {createSlice} from '@reduxjs/toolkit';
import {changePassword, getUserLogin, updatePhone} from '../actions/profile';

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
    build.addCase(updatePhone.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(updatePhone.fulfilled, (state, action) => {
      // state.data = action.payload.data;
      state.successmsg = action.payload.message;
      state.errormsg = action.payload.errormsg;
      state.data.phonenumber = action.payload.data.phonenumber;
    });
    build.addCase(changePassword.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(changePassword.fulfilled, (state, action) => {
      state.successmsg = action.payload.message;
      state.errormsg = action.payload.errormsg;
    });
  },
});

export default profile.reducer;
export {getUserLogin, updatePhone, changePassword};
export const {resetmsg} = profile.actions;
