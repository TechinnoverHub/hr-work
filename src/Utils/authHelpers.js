import jwtDecode from 'jwt-decode';
import Axios from 'Services';

function setToken(token) {
  localStorage.setItem('hr_work_token', token);
}

function getToken() {
  return localStorage.getItem('hr_work_token');
}

function deleteToken() {
  localStorage.removeItem('hr_work_token');
}

function checkTokenValidity(token) {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now();
    const tokenExpiry = decoded.exp * 1000;
    const checkIfExpired = tokenExpiry - currentTime > 1;

    return checkIfExpired;
  } catch (error) {
    return false;
  }
}

function setAuthHeaders(token) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export { setToken, getToken, checkTokenValidity, setAuthHeaders, deleteToken };
