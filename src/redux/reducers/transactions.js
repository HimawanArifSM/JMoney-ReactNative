import {createSlice} from '@reduxjs/toolkit';
import {
  getAllProfile,
  getHistoryTransaction,
  topUp,
  transfer,
} from '../actions/transaction';

const initialState = {
  getAllProfile: [],
  errormsg: '',
  successmsg: '',
  name: '',
  phone: '',
  image: '',
  receiver: '',
  amount: '',
  notes: '',
  date: '',
  pageInfo: '',
};

const transaction = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getname: (state, action) => {
      state.name = action.payload;
    },
    getphone: (state, action) => {
      state.phone = action.payload;
    },
    getimage: (state, action) => {
      state.image = action.payload;
    },
    getreceiver: (state, action) => {
      state.receiver = action.payload;
    },
    getamount: (state, action) => {
      state.amount = action.payload;
    },
    getnotes: (state, action) => {
      state.notes = action.payload;
    },
    getdate: (state, action) => {
      state.date = action.payload;
    },
    resetmsg: state => {
      state.errormsg = null;
      state.successmsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(getAllProfile.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getAllProfile.fulfilled, (state, action) => {
      state.results = action.payload.data;
      state.totalData = action.payload.page.totalData;
    });
    build.addCase(transfer.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(transfer.fulfilled, (state, action) => {
      state.successmsg = action.payload?.message;
      state.errormsg = action.payload?.error;
    });
    build.addCase(topUp.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(topUp.fulfilled, (state, action) => {
      state.successmsg = action.payload?.message;
    });
    build.addCase(getHistoryTransaction.pending, state => {
      state.errormsg = null;
      state.successmsg = null;
    });
    build.addCase(getHistoryTransaction.fulfilled, (state, action) => {
      const data = action.payload.data;
      const page = action.payload.pageInfo;
      if (page.currentpage > 1) {
        state.data = [...state.data, ...data];
        state.pageInfo = page;
      } else {
        state.data = data;
        state.pageInfo = page;
      }
    });
  },
});

export default transaction.reducer;
export {getAllProfile};
export const {
  getimage,
  getname,
  getphone,
  getreceiver,
  getamount,
  getnotes,
  getdate,
  resetmsg,
} = transaction.actions;
