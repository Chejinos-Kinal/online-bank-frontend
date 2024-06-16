import { useState } from 'react';
import toast from 'react-hot-toast';
import { getProductsRequest } from '../../../services/products.service';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await getProductsRequest();

    if (response.error) {
      if (response?.err?.response?.data?.errors) {
        let arr = response?.err?.response?.data?.errors;
        for (const error of arr) {
          return toast.error(error.msg);
        }
      }
      return toast.error(
        response?.err?.response?.data?.msg ||
          response?.err?.data?.msg ||
          'Error al obtener los productos.',
      );
    } else {
      toast.success('Hoteles obtenidos correctamente.');
    }

    console.log(response);

    setProducts(response.data);
  };

  return {
    products,
    isFetching: !products,
    getProducts,
  };
};
