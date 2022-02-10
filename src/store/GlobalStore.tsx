import {configureStore} from '@reduxjs/toolkit';

import letestMovieList from '../feature/movie/letestMovieList';
import popularMovielist from '../feature/movie/popularMovielist';

export const store = configureStore({
  reducer: {
    letest: letestMovieList,
    popular: popularMovielist,
  },
});
