import { Box, Container } from 'components/common/shared.styled';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetailsByID } from 'services/MovieAPI';

const LINKS = [
  { name: 'Cast', to: 'cast' },
  { name: 'Reviews', to: 'reviews' },
];

export function MovieDetail() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      setMovieDetails(await getMovieDetailsByID(movieId));
    }

    getMovieDetails();
  }, [movieId]);

  //no data - no markup
  if (!movieDetails) return null;

  //else render details
  const {
    title,
    original_title,
    original_name,
    poster_path,
    vote_average,
    overview,
    genres,
  } = movieDetails ?? {};
  const movieGenresNames = genres?.map(
    ({ name }, index) => name + (index !== genres.length - 1 ? ', ' : '')
  );
  const movieName = title ?? original_title ?? original_name ?? 'No data!';

  return (
    <Container>
      <main>
        {' '}
        <Link to={location.state?.from ?? '/'}>Go back</Link>
        {/* GENERAL INFO */}
        <Box display="flexbox" mb={3}>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`Poster for movie ${movieName}`}
              width="300"
            />
          ) : (
            <Box width="normal" height="wide" bg="grey" />
          )}
          <Box ml={3} p={4} width="wide">
            <h2>{movieName}</h2>
            <p>User score: {Math.ceil(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{movieGenresNames}</p>
          </Box>
        </Box>
        {/* ADDITIONAL INFO */}
        <Box>
          {' '}
          <p>Additional info</p>
          <ul>
            {LINKS.map(({ to, name }) => (
              <li key={name}>
                <Link to={to} state={{ from: location.state?.from ?? '/' }}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </main>

      {/* CHILDREN */}
      <Outlet />
    </Container>
  );
}
