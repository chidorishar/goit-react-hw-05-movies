import { Section } from 'components/common/shared.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviewsByID } from 'services/MovieAPI';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getMovieReviews() {
      setMovieReviews(await getMovieReviewsByID(movieId));
    }

    getMovieReviews();
  }, [movieId]);

  //no data - no markup
  if (!movieReviews) return null;

  return (
    <Section>
      <ul>
        {movieReviews.length
          ? movieReviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>
                  <b>Author: {author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))
          : 'We don`t have any reviews for this movie!'}
      </ul>
    </Section>
  );
}
