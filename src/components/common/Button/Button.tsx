import React from "react";
import { Button } from "@mui/material";

import { CustomButtonTypes } from "./Button.types";

const CustomButton: React.FC<CustomButtonTypes> = ({
  variant = "contained",
  text,
  disabled = false,
  icon = null,
  customStyles = {},
  onCustomClick = () => {},
  loading = false,
}) => {
  return (
    <Button
      variant={variant}
      style={{
        width: "100%",
        height: "56px",
        borderRadius: "12px",
        ...customStyles,
      }}
      startIcon={icon ? <span className={`icon-${icon}`}></span> : null}
      onClick={onCustomClick}
      loading={loading}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
