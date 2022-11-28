import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetail = lazy(() => import('pages/MovieDetail'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={null} />
    </Routes>
  );
};
