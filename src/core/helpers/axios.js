import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://rimac-front-end-challenge.netlify.app/api/',
});
