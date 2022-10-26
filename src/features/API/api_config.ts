import axios from 'axios';

const axiosClient = axios.create({
  url: '/todos',
  method: 'get',
  baseURL: 'https://6350eb413e9fa1244e505af5.mockapi.io/todo',
  responseType: 'json',
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});
export default axiosClient;
