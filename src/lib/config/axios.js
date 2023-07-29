import axios from 'axios';
import { REACT_APP_API_URI } from '../../env.config';

const getAxiosInstance = (contentType) => {
  const config = {
    baseURL: REACT_APP_API_URI,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': contentType,
    },
  };

  const instance = axios.create(config);
  instance.defaults.timeout = 12000;

  return instance;
};

export const axiosJsonInstance = getAxiosInstance('application/json');
