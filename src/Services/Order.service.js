import Axios from './index';

export const createOrder = async data => {
  return Axios({
    method: 'POST',
    url: '/order/submit',
    data
  });
};

export const fetchOrders = async () => {
  return Axios({
    method: 'GET',
    url: '/order/all'
  });
};
