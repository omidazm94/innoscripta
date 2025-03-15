import React from "react";

import { ArticleItemProps } from "./NewsCard.types";
import { ColorPalette } from "../../../styles/colorPalette";
import { Article } from "../../../types/models/Article";
import {
  NewsCardContainer,
  NewsCardInfo,
  NewsCardImageContainer,
} from "./NewsCard.styles";

const NewsCard: React.FC<ArticleItemProps> = ({ article }) => {
  const clickHandler = (article: Article) => {
    window.open(article.url, "_blank");
  };

  return (
    <NewsCardContainer
      onClick={() => clickHandler(article)}
      data-testid="clickable-contact-item"
    >
      <NewsCardImageContainer>
        {article.image ? (
          <img src={article.image} className="avatar" loading="lazy" />
        ) : (
          <span
            className="icon-user avatar"
            style={{
              color: ColorPalette.WHITE,
            }}
          />
        )}
        <NewsCardInfo>
          <span className="source-name">{article.source.name}</span>
          <span className="title">{article.title}</span>
        </NewsCardInfo>
      </NewsCardImageContainer>
    </NewsCardContainer>
  );
};

export default NewsCard;
