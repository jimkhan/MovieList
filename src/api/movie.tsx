import ApiCall from './ApiCall';

import {useSelector} from 'react-redux';
const api_key = 'api_key=2740ad7474eaef0a7c5388026745848a';
const popular = page => ApiCall.get(`/popular?page=${page}&${api_key}`);

const letest = (email, password) =>
  ApiCall.post('/loginCheck', {email, password});

export default {
  popular,
  letest,
};
