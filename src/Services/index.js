import axios from 'axios';

const apiBaseUrl =
  process.env.REACT_APP_BASE_URL || 'https://hr-works-api.herokuapp.com';

const instance = axios.create({
  baseURL: apiBaseUrl
});

export default instance;
