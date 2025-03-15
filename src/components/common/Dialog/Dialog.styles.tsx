import MUIDialog from "@mui/material/Dialog";
import { DialogContent, DialogActions, DialogTitle } from "@mui/material";
import styled from "@emotion/styled";

import { MUIDialogProps } from "./Dialog.types";
import { iOS } from "../../../utils/helpers";
import { ColorPalette } from "../../../styles/colorPalette";

const StyledDialog = styled(MUIDialog)<MUIDialogProps>(
  ({ theme }) => ({
    "& .MuiDialog-paper": {
      borderTopRightRadius: "16px",
      borderTopLeftRadius: "16px",
    },

    "@media (max-width: 600px)": {
      top: "unset",

      "& .MuiDialog-paper": {
        maxWidth: "100%",
        maxHeight: iOS() ? "-webkit-fill-available" : window.innerHeight,
        borderRadius: "24px 24px 0px 0px",

        "@supports not (maxHeight: -webkit-fill-available)": {
          maxHeight: window.innerHeight,
        },
      },
    },
  }),
  (props) => ({ ...props.customstyles })
);

const StyledDialogContent = styled(DialogContent)({
  backgroundColor: ColorPalette.WHITE,
  padding: 0,
});

const StyledDialogActions = styled(DialogActions)({
  padding: "16px",
  backgroundColor: ColorPalette.WHITE,
  borderTop: `1px solid ${ColorPalette.GRAY_3}`,
});

const TitleContainer = styled.div<MUIDialogProps>(
  {
    display: "flex",
    justifyContent: "flex-end", // Ensures everything aligns to the right initially
    alignItems: "center", // Aligns the items vertically in the center
    padding: "0px 24px",
    backgroundColor: ColorPalette.WHITE,
    borderBottom: `1px solid ${ColorPalette.GRAY_3}`,
    direction: "ltr",
    overflow: "hidden",
    minHeight: "72px",
    height: "72px",
  },
  (props) => ({ ...props.customstyles })
);

const DialogInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledDialogTitle = styled(DialogTitle)({
  marginRight: "8px",
  padding: 0,
  fontFamily: "iransans",
  fontSize: "16px",
  fontWeight: 700,
  color: ColorPalette.GRAY_5,
});

export {
  StyledDialog,
  StyledDialogContent,
  StyledDialogActions,
  TitleContainer,
  DialogInfoContainer,
  StyledDialogTitle,
};
