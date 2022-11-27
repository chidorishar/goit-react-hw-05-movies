import { Box, Container } from 'components/common/shared.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetailByID } from 'services/MovieAPI';

export function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      setMovieDetails(await getMovieDetailByID(movieId));
    }

    getMovieDetails();
  }, [movieId]);

  const { title, original_title, poster_path, vote_average, overview, genres } =
    movieDetails ?? {};
  const movieGenresNames = genres?.map(
    ({ name }, index) => name + (index !== genres.length - 1 ? ', ' : '')
  );
  console.log(movieGenresNames);

  return (
    <Container>
      <Box display="flexbox">
        {' '}
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`Poster for movie ${title ?? original_title}`}
          width="300"
        />
        <Box ml={3} p={4} width="normal">
          {' '}
          <h2>{title ?? original_title}</h2>
          <p>User score: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{movieGenresNames}</p>
        </Box>
      </Box>
    </Container>
  );
}
