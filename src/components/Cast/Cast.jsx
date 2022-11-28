import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCastByID } from 'services/MovieAPI';

import { Box, Section } from 'components/common/shared.styled';
import { CastCard, CastCardsContainer, PersonPhoto } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function getMovieCast() {
      setMovieCast(await getMovieCastByID(movieId));
    }

    getMovieCast();
  }, [movieId]);

  //no data - no markup
  if (!movieCast) return null;

  return (
    <Section>
      <CastCardsContainer>
        {movieCast.length
          ? movieCast.map(({ name, character, profile_path, id }) => (
              <CastCard key={id}>
                {profile_path ? (
                  <PersonPhoto
                    src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                    alt={`${name}`}
                    width="150"
                  />
                ) : (
                  <Box width="150px" height="100%" bg="grey" flexShrink="0" />
                )}
                <Box ml={2} p={2} pt={3}>
                  <p>
                    <b>{name}</b>
                  </p>
                  <p>Character: {character}</p>
                </Box>
              </CastCard>
            ))
          : 'We don`t have any data about cast for this movie!'}
      </CastCardsContainer>
    </Section>
  );
}
