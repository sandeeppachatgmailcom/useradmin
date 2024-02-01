
import axios from 'axios';

export default axios.interceptors.request.use(
    (config) => {
      // Extract the cookie value using `document.cookie`
      const cookieToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];
            
        // Attach the cookie to the request header
            config.headers.Cookies= `${cookieToken}`;
  
      return config;
    },
    (error) => {
      // Handle request errors
      return Promise.reject(error);
    }
  );






  