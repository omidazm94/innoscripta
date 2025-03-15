/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, Slide } from "@mui/material";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

import { DialogProps } from "./Dialog.types";
import {
  StyledDialogContent,
  StyledDialogActions,
  StyledDialog,
  DialogInfoContainer,
  StyledDialogTitle,
  TitleContainer,
} from "./Dialog.styles";
import { ColorPalette } from "../../../styles/colorPalette";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction={"up"} ref={ref} {...props} />;
});

const Dialog: React.FC<DialogProps> = ({
  open,
  handleClose,
  title,
  content,
  footer = undefined,
  customStyles = {},
  titleContainerCustomStyle = {},
  hideBackdrop = false,
  disableScrollLock = false,
}) => {
  return (
    <StyledDialog
      open={open}
      onClose={handleClose}
      fullScreen
      slotProps={{
        paper: {
          style: {
            width: "100%",
            height: "100vh",
          },
        },
      }}
      scroll={"paper"}
      customstyles={customStyles}
      hideBackdrop={hideBackdrop}
      disableScrollLock={disableScrollLock}
      {...{
        TransitionComponent: Transition,
      }}
    >
      <TitleContainer
        customstyles={titleContainerCustomStyle}
        style={{ justifyContent: "flex-end" }}
      >
        <DialogInfoContainer>
          <StyledDialogTitle>{title}</StyledDialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              p: 0,
            }}
          >
            <span
              className={"icon-close"}
              style={{ fontSize: "24px", color: ColorPalette.GRAY_5 }}
            />
          </IconButton>
        </DialogInfoContainer>
      </TitleContainer>
      <StyledDialogContent>{content}</StyledDialogContent>
      {footer && <StyledDialogActions>{footer}</StyledDialogActions>}
    </StyledDialog>
  );
};

export default Dialog;
