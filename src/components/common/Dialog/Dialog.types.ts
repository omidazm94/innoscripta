/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme } from "@emotion/react";
import { CSSProperties, ReactNode } from "react";

export type MUIDialogProps = {
  customstyles?: CSSProperties;
  theme?: Theme;
};

export interface DialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: ReactNode;
  footer?: ReactNode;
  customStyles?: CSSProperties;
  titleContainerCustomStyle?: CSSProperties;
  action?: {
    type: string;
    payload: any;
  };
  hideBackdrop?: boolean;
  disableScrollLock?: boolean;
}
