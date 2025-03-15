import { CSSProperties, MouseEventHandler, ReactNode } from "react";

export type Style = {
  [key: string]: CSSProperties;
};

export type CustomButtonTypes = {
  variant?: "contained" | "outlined" | "text";
  text: string | ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  customStyles?: CSSProperties | Style;
  onCustomClick?: MouseEventHandler;
  loading?: boolean;
};
