import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { LayoutContainer, LayoutContent, LayoutHeader } from "./Layout.styles";
import { RootState, useAppDispatch } from "../../store/store";
import { openSnackbar } from "../../store/slices/snackbarSlice";
import { Snackbar } from "@mui/material";

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const error = useSelector((state: RootState) => state.home.error);
  const location = useLocation();

  useEffect(() => {
    if (error)
      dispatch(
        openSnackbar({
          type: "error",
          msg: error,
        })
      );
  }, [error, location, dispatch]);

  return (
    <LayoutContainer>
      <LayoutHeader>
        {location.pathname !== "/" ? (
          <div className="header-title">
            <span
              className="icon-chevron-left back-button"
              onClick={() => window.history.back()}
            ></span>
          </div>
        ) : (
          <span></span>
        )}
        <h3 className="brand">{"innoscripta"}</h3>
      </LayoutHeader>
      <LayoutContent id="layout-container">
        <Outlet />
      </LayoutContent>

      <Snackbar />
    </LayoutContainer>
  );
};

export default Layout;
