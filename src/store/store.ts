import { configureStore } from "@reduxjs/toolkit";

import snackbarSlice from "./slices/snackbarSlice";
import homeSlice from "./slices/homeSlice";
import { useDispatch } from "react-redux";
import { homeApi } from "../services/api/homeApi";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    home: homeSlice,
    snackbar: snackbarSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
