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

const authState = createSlice({
  name: 'letest',
  initialState,
  reducers: {
    addLetestList: (state, action) => {
      state.isLoading = false;
      state.movieList.push(action.payload);
      console.log('Letest list', state.movieList);
    },
  },
});

export const {addLetestList} = authState.actions;

export default authState.reducer;
