import axiosInstance from '../../../app/api/axiosInstance';

// login API call
export const login = (credentials) => {
  return axiosInstance.post('Auth/login', credentials);
};
