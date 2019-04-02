import axios from 'axios'
axios.interceptors.request.use(
  config => {
    if (config.method === 'post' || config.method === 'put') {
      // config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error.data.error.message);
  }
);

axios.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios
