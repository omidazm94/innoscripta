import { createSlice } from "@reduxjs/toolkit";

export interface SnackbarConf {
  open: boolean;
  type: "success" | "info" | "warning" | "error";
  msg: string;
  autoHideDuration: number;
}

const initialState = {
  open: false,
  type: "",
  msg: "",
  autoHideDuration: 5000,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: { ...initialState },
  reducers: {
    clearSnackbar(state) {
      state.open = false;
      state.type = "";
      state.msg = "";
      state.autoHideDuration = 5000;
    },
    openSnackbar(state, action) {
      const { type, msg, autoHideDuration = 5000 } = action.payload;

      state.open = true;
      state.type = type;
      state.msg = msg;
      state.autoHideDuration = autoHideDuration;
    },
    closeSnackbar(state) {
      state.open = initialState.open;
      state.type = initialState.type;
      state.msg = initialState.msg;
      state.autoHideDuration = initialState.autoHideDuration;
    },
  },
  extraReducers: () => {},
});

export const { openSnackbar, closeSnackbar, clearSnackbar } =
  snackbarSlice.actions;

export default snackbarSlice.reducer;
