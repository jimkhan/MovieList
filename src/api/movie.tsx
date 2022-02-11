import ApiCall from './ApiCall';
const api_key = 'api_key=2740ad7474eaef0a7c5388026745848a';

const popular = (page: number) => {
  return ApiCall.get(`/popular?page=${page}&${api_key}`);
};

const latest = (page: number) =>
  ApiCall.get(`/now_playing?page=${page}&${api_key}`);

const getDetailsByMovieId = (movie_id: number) =>
  ApiCall.get(`/${movie_id}?${api_key}`);

export {popular, latest, getDetailsByMovieId};
