import { HomePageForClient } from './pages/HomePage/HomePageForClient';
import { Products } from './pages/Products/Products';
import { ProductsClient } from './pages/Products/ProductsClient';
export const routes = [
  {
    path: '/',
    element: <HomePageForClient />,
  },
  {
    path: '/productsAdmin',
    element: <Products />,
  },
  {
    path: '/productsClient/*',
    element: <ProductsClient />,
  },
];
