import {createSlice} from '@reduxjs/toolkit';
import {MovieData} from '@dataType';

interface stateProps {
  isLoading: boolean;
  movieList: MovieData[];
}
const initialState = {
  isLoading: true,
  movieList: [],
} as stateProps;

const popularList = createSlice({
  name: 'letest',
  initialState,
  reducers: {
    addPopularList: (state, action) => {
      state.isLoading = false;
      state.movieList.push(...action.payload);
      console.log('Letest list', action.payload);
    },
  },
});

export const {addPopularList} = popularList.actions;

export default popularList.reducer;
