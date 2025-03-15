import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";

import { closeSnackbar, SnackbarConf } from "../../store/slices/SnackbarSlice";

const AppSnackbar = () => {
  const dispatch = useDispatch();
  const { open, type, msg, autoHideDuration } = useSelector(
    (state: { snackbar: SnackbarConf }) => state.snackbar
  );

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        style={{ bottom: 32 }}
      >
        <Alert onClose={handleClose} severity={type}>
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AppSnackbar;
