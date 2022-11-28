import { Link } from 'react-router-dom';

export function MoviesList({ moviesData, location }) {
  return (
    <ul>
      {moviesData.map(({ title, id, original_name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title ?? original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
