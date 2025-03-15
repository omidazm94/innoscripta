export const baseApiEndpoints = {
  newsApiOrg: "https://newsapi.org/v2",
  theGuardian: "https://content.guardianapis.com",
  newsApiAi: "https://eventregistry.org/api/v1",
};

export const getNewsApiArticleURL = "https://newsapi.org/v2/everything";

// endpoint have different parameters for different sources
export const searchApiEndpoints = ({
  query,
  date,
  sources,
}: {
  query?: string;
  date?: string;
  sources?: string[];
}) => ({
  newsApiOrg: `https://newsapi.org/v2/top-headlines?apiKey=f3c2ab0efdbe4badbe7344f734795ff8${
    sources?.length ? `&sources=${sources.join(",")}` : ""
  }${query?.length ? `&q=${query}` : ""} ${
    date?.length ? `&date=${date}` : ""
  }`,
  theGuardian: `https://content.guardianapis.com/search?api-key=5a0adda6-b5b6-4172-aca3-990489bda465${
    sources?.length ? `&sources=${sources.join(",")}` : ""
  }${query?.length ? `&query=${query}` : ""} ${
    date?.length ? `&date=${date}` : ""
  }`,
  nytimes: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=z4WZWvSI0ObT9T7AiDHG64NQ5zaBGooj`,
  newsApiAi: `https://eventregistry.org/api/v1/article/getArticles?apiKey=56813d59-5ccd-42cc-8f45-048c7706a992${
    sources?.length ? `&sources=${sources.join(",")}` : ""
  }${query?.length ? `&query=${query}` : ""} ${
    date?.length ? `&date=${date}` : ""
  }`,
});
