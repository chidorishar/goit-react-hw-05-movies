import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { MoviesListItem, MoviesListStyled } from './MoviesList.styled';

export function MoviesList({ moviesData, location }) {
  return (
    <MoviesListStyled>
      {moviesData.map(({ title, id, original_name }) => (
        <MoviesListItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ?? original_name}
          </Link>
        </MoviesListItem>
      ))}
    </MoviesListStyled>
  );
}

MoviesList.propsType = {
  moviesData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    original_name: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: null,
    key: PropTypes.string,
  }).isRequired,
};
