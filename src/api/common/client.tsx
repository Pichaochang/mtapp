import axios from 'axios';
export const client = axios.create({
  baseURL: 'http://202.79.174.152:8878/',
});
