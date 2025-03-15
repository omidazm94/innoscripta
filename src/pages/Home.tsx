import React from "react";
import styled from "@emotion/styled";
import { useGetNewsApiArticlesQuery } from "../services/api/homeApi";
import NewsCard from "../components/home/NewsCard";
import Loading from "../components/common/Loading";
import SearchComponent from "../components/home/Search/Search";

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Home: React.FC = () => {
  const { data, isLoading, error } = useGetNewsApiArticlesQuery({
    query: "bitcoin",
  });
  if (isLoading) {
    return <Loading loading={true} />;
  }
  if (error) {
    return <div>Oooos!</div>;
  }
  return (
    <HomeContainer>
      <SearchComponent />
      {data?.length &&
        data.map((article) => {
          return <NewsCard article={article} key={article.url} />;
        })}
    </HomeContainer>
  );
};

export default Home;
