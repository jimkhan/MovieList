import {create} from 'apisauce';

const ApiCall = create({
  baseURL: 'https://api.themoviedb.org/3/movie',
});

export default ApiCall;
