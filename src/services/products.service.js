import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

export const addProductRequest = async (data) => {
  try {
    return await apiClient.post('/user/add/product', data);
  } catch (err) {
    return {
      error: true,
      err,
    };
  }
};

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
