import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from 'components/common/shared.styled';
import { MoviesList } from 'components/common/MoviesList/MoviesList';

import { getTrendingMovies } from 'services/MovieAPI';

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
      <main>
        {' '}
        <h2>Trending today</h2>
        {moviesData && (
          <MoviesList moviesData={moviesData} location={location} />
        )}
      </main>
    </Container>
  );
}
