import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCastByID } from 'services/MovieAPI';

export function Cast() {
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
    <ul>
      {movieCast.length
        ? movieCast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
                alt={`${name}`}
                width="150"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))
        : 'We don`t have any data about cast for this movie!'}
    </ul>
  );
}
