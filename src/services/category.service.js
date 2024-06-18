import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

export const getCategoryRequest = async () => {
  try {
    return await apiClient.get('/user/categories');
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};
