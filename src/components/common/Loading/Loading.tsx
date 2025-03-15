import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";

import { LoadingTypes, ProgressIndicatorTypes } from "./Loading.type";
import { ColorPalette } from "../../../styles/colorPalette";

type LoadingBoxProps = {
  text?: string;
};

const StyledBox = styled(Box)<LoadingBoxProps>`
  display: flex;
  flex-direction: ${({ text }) => (text && text.length ? "column" : "row")};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)({
  marginTop: "16px",
  fontSize: "14px",
  fontWeight: 700,
  lineHeight: "180%",
  color: ColorPalette.GRAY_1,
});

const ProgressIndicator: React.FC<ProgressIndicatorTypes> = ({
  type,
  text,
  customContainerStyle,
  style,
}) => (
  <StyledBox text={text} style={customContainerStyle}>
    {type !== "circle" ? (
      <LinearProgress style={{ color: ColorPalette.PRIMARY_1, ...style }} />
    ) : (
      <CircularProgress style={{ color: ColorPalette.PRIMARY_1, ...style }} />
    )}
    {text && text.length > 0 && <StyledTypography>{text}</StyledTypography>}
  </StyledBox>
);

const Loading: React.FC<LoadingTypes> = ({
  loading = true,
  type = "circle",
  backDrop = false,
  customStyle = {},
  customContainerStyle = {},
  text = "",
}) =>
  backDrop ? (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...customContainerStyle,
      }}
      open={loading}
    >
      <ProgressIndicator type={type} text={text} style={customStyle} />
    </Backdrop>
  ) : (
    loading && (
      <ProgressIndicator
        type={type}
        text={text}
        customContainerStyle={customContainerStyle}
        style={customStyle}
      />
    )
  );

export default Loading;
