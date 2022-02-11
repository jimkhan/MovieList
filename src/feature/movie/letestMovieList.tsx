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

const latestList = createSlice({
  name: 'latest',
  initialState,
  reducers: {
    addLatestList: (state, action) => {
      state.isLoading = false;
      state.movieList.push(...action.payload);
      console.log('Latest list', state.movieList);
    },
  },
});

export const {addLatestList} = latestList.actions;

export default latestList.reducer;
