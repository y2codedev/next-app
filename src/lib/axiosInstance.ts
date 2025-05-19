import axios from "axios";
// import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosRetry(axiosInstance, {
//     retries: 3,
//     retryDelay: axiosRetry.exponentialDelay,
//     retryCondition: (error) => {
//         return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status >= 500;
//     },
// });

export default axiosInstance;
