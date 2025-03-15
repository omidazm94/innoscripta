import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: any = {
  data: { items: [], meta: {} },
  searchData: undefined,
  frequents: [],
  status: "idle",
  contact: undefined,
  error: null,
};

const homeSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    clearData(state) {
      state.error = null;
      state.data = { items: [], meta: {} };
    },
    clearSearchData(state) {
      state.error = null;
      state.searchData = { items: [], meta: {} };
    },
    clearContact(state) {
      state.error = null;
      state.contact = undefined;
    },
  },
  extraReducers: () => {},
});

export const { clearData, clearSearchData, clearContact } = homeSlice.actions;

export default homeSlice.reducer;
