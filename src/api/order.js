import ApiCall from './ApiCall';

const allOrder = token =>
  ApiCall.get('/allOrders', {}, {headers: {Authorization: `Bearer ${token}`}});

const orderByStatus = (status, token) =>
  ApiCall.get(
    '/getOrderByStatus',
    {status},
    {headers: {Authorization: `Bearer ${token}`}},
  );

export default {
  allOrder,
  orderByStatus,
};
