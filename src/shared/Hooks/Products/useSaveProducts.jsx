import { useState } from 'react';
import toast from 'react-hot-toast';
import { addProductRequest } from '../../../services/products.service';

export const useSaveProducts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addProducts = async (name, description, price, stock, category) => {
    setIsLoading(true);
    const product = {
      name,
      description,
      price,
      stock,
      category,
    };

    try {
      const response = await addProductRequest(product);

      if (response.error) {
        if (response?.err?.response?.data?.errors) {
          let arr = response?.err?.response?.data?.errors;
          for (const error of arr) {
            toast.error(error.msg);
          }
        } else {
          toast.error(
            response?.err?.response?.data?.msg ||
              response?.err?.data?.msg ||
              'Error al agregar producto.',
          );
        }
      } else {
        toast.success('Producto agregado correctamente');
      }
    } catch (err) {
      toast.error('Error al agregar producto.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    addProducts,
    isLoading,
  };
};
