import Axios from './index';

export const createUser = async data => {
  return Axios({
    method: 'POST',
    url: '/auth/user/signup',
    data
  });
};

export const loginUser = async data => {
  return Axios({
    method: 'POST',
    url: '/auth/user/login',
    data
  });
};

export const getUserProfile = async () => {
  return Axios({
    method: 'GET',
    url: '/user/one'
  });
};
