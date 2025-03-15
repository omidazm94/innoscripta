import styled from "@emotion/styled";
import { ColorPalette } from "../../styles/colorPalette";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const LayoutHeader = styled.header`
  display: flex;
  padding: 0 0.8rem;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  box-sizing: border-box;

  .header-title {
    display: flex;
    align-items: center;
    gap: 4px;

    .title {
      font-size: 1.5rem;
    }

    .back-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .brand {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${ColorPalette.PRIMARY_1};
  }
`;

export const LayoutContent = styled.main`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  padding: 0.8rem 0.8rem 0;
  justify-content: space-between;
  height: calc(100vh - 64px);
  height: calc(100dvh - 64px);
  overflow-y: auto;
  box-sizing: border-box;
  background-color: ${ColorPalette.GRAY_1};
`;
