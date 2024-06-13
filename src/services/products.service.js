import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

export const getProductsRequest = async () => {
  try {
    return await apiClient.get('/user/products');
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};

export const addProductRequest = async () => {
  try {
  } catch (err) {
    error: true, err;
  }
};
