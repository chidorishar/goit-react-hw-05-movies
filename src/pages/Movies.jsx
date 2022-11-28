import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { Container } from 'components/common/shared.styled';
import { MoviesList } from 'components/common/MoviesList/MoviesList';

import { getMoviesByName } from 'services/MovieAPI';

const SEARCH_QUERY_PARAM_KEY = 'query';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [foundedMovies, setFoundedMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMoviesByName() {
      setFoundedMovies(await getMoviesByName(searchedMovieName));
    }

    const searchedMovieName = searchParams.get(SEARCH_QUERY_PARAM_KEY);
    searchedMovieName ? fetchMoviesByName() : setFoundedMovies(null);
  }, [searchParams]);

  const onSearchFormSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.searchQuery.value;

    if (!searchQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      [SEARCH_QUERY_PARAM_KEY]: searchQuery,
    });
    e.target.reset();
  };

  return (
    <Container>
      <main>
        <form onSubmit={onSearchFormSubmit}>
          <input type="text" name="searchQuery" placeholder="Movie name" />
          <button type="submit">Search</button>
        </form>
        {foundedMovies && (
          <MoviesList moviesData={foundedMovies} location={location} />
        )}
      </main>
    </Container>
  );
}
