import styled from "@emotion/styled";
import { ColorPalette } from "../../../styles/colorPalette";

export const NewsCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 4px;
  background-color: ${ColorPalette.WHITE};

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border-radius: 12px;
    margin-right: 10px;
    font-size: 25px;
  }

  span {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${ColorPalette.PRIMARY_1};
    color: ${ColorPalette.WHITE} !important;

    .address {
      color: ${ColorPalette.WHITE} !important;
    }

    .icon-phone {
      color: ${ColorPalette.WHITE} !important;
    }
  }
`;

export const NewsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center !important;
  font-size: 18px;
  gap: 4px;

  .address {
    color: ${ColorPalette.GRAY_4};
    font-size: 14px;
  }

  .source-name {
    font-size: 12px;
    color: ${ColorPalette.SECONDARY_1};
    font-weight: bold;
  }
`;

export const NewsCardImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
