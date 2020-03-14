import Axios from './index';

export const getAllPackages = async ({ page = 1, limit = 9 }) => {
  return Axios({
    method: 'GET',
    url: '/package/all',
    params: {
      page,
      limit
    }
  });
};

export const getPackage = async ({ productCode }) => {
  return Axios({
    method: 'GET',
    url: `/package/${productCode}`
  });
};
