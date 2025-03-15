export interface NewsApiArticle {
  source: { id: string; name: string };
  title: string;
  description: string;
  url: string;
  image: string;
  urlToImage: string;
}

export interface NewsApiResponse {
  articles: NewsApiArticle[];
  status: string;
  totalResults: number;
}
