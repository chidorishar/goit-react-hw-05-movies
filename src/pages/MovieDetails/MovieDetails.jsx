import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetailsByID } from 'services/MovieAPI';

import { Box, Container } from 'components/common/shared.styled';
import {
  AdditionalInfoHeader,
  AdditionalInfoItem,
  AdditionalInfoLink,
  AdditionalInfoLinks,
  ImageThumb,
  MainStyled,
  PosterImg,
  ReturnButton,
} from './MovieDetails.styled';

const LINKS = [
  { name: 'Cast', to: 'cast' },
  { name: 'Reviews', to: 'reviews' },
];

export default function MovieDetails() {
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
      <MainStyled>
        {/* GENERAL INFO */}
        <Box display="flex" mb={4} justifyContent="center">
          <ImageThumb>
            {poster_path ? (
              <PosterImg
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt={`Poster for movie ${movieName}`}
                width="300"
              />
            ) : (
              <Box width="normal" height="wide" bg="grey" />
            )}
          </ImageThumb>
          <Box ml={3} p={4} width="wide" position="relative">
            <ReturnButton to={location.state?.from ?? '/'}>
              Go back
            </ReturnButton>
            <h2>{movieName}</h2>
            <p>User score: {Math.ceil(vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{movieGenresNames}</p>
          </Box>
        </Box>
        {/* ADDITIONAL INFO */}
        <Box mb={2}>
          <AdditionalInfoHeader>Additional info</AdditionalInfoHeader>
          <AdditionalInfoLinks>
            {LINKS.map(({ to, name }) => (
              <AdditionalInfoItem key={name}>
                <AdditionalInfoLink
                  to={to}
                  state={{ from: location.state?.from ?? '/' }}
                >
                  {name}
                </AdditionalInfoLink>
              </AdditionalInfoItem>
            ))}
          </AdditionalInfoLinks>
        </Box>
      </MainStyled>

      {/* CHILDREN */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
