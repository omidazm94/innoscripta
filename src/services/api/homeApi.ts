import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getNewsApiArticleURL } from "../url/home";
import { NewsApiResponse } from "../../types/interfaces/home";
import { Article } from "../../types/models/Article";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (build) => ({
    getNewsApiArticles: build.query<Article[], { query?: string }>({
      query: ({ query }) => ({
        url: getNewsApiArticleURL,
        params: {
          q: query || undefined,
        },
        headers: {
          "X-Api-Key": "f3c2ab0efdbe4badbe7344f734795ff8",
        },
      }),
      transformResponse: (response: NewsApiResponse): Article[] => {
        return response.articles.map((article) => ({
          type: "newsapi",
          title: article.title,
          description: article.description,
          source: article.source,
          url: article.url,
          image: article.urlToImage,
        }));
      },
    }),
  }),
});

export const { useGetNewsApiArticlesQuery } = homeApi;
