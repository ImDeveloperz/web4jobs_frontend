import Axios, { AxiosInstance } from 'axios';

const axios : AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axios;
