import {configureStore} from '@reduxjs/toolkit';
import latestMovieList from '../feature/movie/letestMovieList';
import popularMovielist from '../feature/movie/popularMovielist';

export const store = configureStore({
  reducer: {
    latest: latestMovieList,
    popular: popularMovielist,
  },
});
