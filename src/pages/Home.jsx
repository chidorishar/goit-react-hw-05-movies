import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container } from 'components/common/shared.styled';
import { getTrendingMovies } from 'services/MovieAPI';

export function Home() {
  const [moviesData, setMoviesData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMoviesData = async () =>
      setMoviesData(await getTrendingMovies());

    fetchMoviesData();
  }, []);

  return (
    <Container>
      <h2>Trending today</h2>
      {moviesData && (
        <ul>
          {moviesData.map(({ title, id, original_name }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title ?? original_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
