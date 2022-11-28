import { Cast } from 'pages/Cast';
import { Home } from 'pages/Home';
import { MovieDetail } from 'pages/MovieDetail';
import { Movies } from 'pages/Movies';
import { Reviews } from 'pages/Reviews';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={null} />
    </Routes>
  );
};

/**
     '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
    '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
    '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
    /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
    /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
 */
