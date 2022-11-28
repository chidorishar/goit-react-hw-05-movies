import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, MainWrapper } from 'components/common/shared.styled';
import { MoviesList } from 'components/common/MoviesList/MoviesList';

import { getTrendingMovies } from 'services/MovieAPI';
import { Title } from './Home.styled';

export default function Home() {
  const [moviesData, setMoviesData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesData = async () =>
      setMoviesData(await getTrendingMovies());

    fetchMoviesData();
  }, []);

  return (
    <Container>
      <MainWrapper>
        <Title>Trending today</Title>
        {moviesData && (
          <MoviesList moviesData={moviesData} location={location} />
        )}
      </MainWrapper>
    </Container>
  );
}
