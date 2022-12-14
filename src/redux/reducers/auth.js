import {createSlice} from '@reduxjs/toolkit';
import {login, register, createPin} from '../actions/auth';

const initialState = {
  token: '',
  id: '',
  errormsg: '',
  successmsg: '',
  email: '',
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    getEmail: (state, action) => {
      state.email = action.payload;
    },
    resetmsg: state => {
      state.successmsg = null;
      state.errormsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.data?.token;
      const id = action.payload?.data?.id;
      state.errormsg = action.payload?.error;
      if (token) {
        state.token = token;
        state.id = id;
      }
    });
    build.addCase(register.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(register.fulfilled, (state, action) => {
      state.successmsg = action.payload?.message;
      state.errormsg = action.payload?.error;
    });
    build.addCase(createPin.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(createPin.fulfilled, (state, action) => {
      state.successmsg = action.payload?.message;
    });
  },
});

export default auth.reducer;
export {login};
export const {logOut, getEmail, resetmsg} = auth.actions;
