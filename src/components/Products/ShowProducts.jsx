import { Route, Routes } from 'react-router-dom';

import { ProductsClient } from './ProductsClient';

import { useEffect } from 'react';

import { useGetProducts } from '../../shared/Hooks/Products/useGetProducts';

import { ClockLoader } from 'react-spinners';

export const ShowProducts = () => {
  const { products, getProducts, isFetching } = useGetProducts();

  useEffect(() => {
    getProducts();
  }, []);

  if (isFetching) {
    return (
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <ClockLoader />
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route
          path="showProducts"
          element={<ProductsClient products={products} />}
        ></Route>
      </Routes>
    </div>
  );
};
