import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://10.0.2.2:3333/',
};

export const api = axios.create(config);
