import React from 'react';
import ProductCatalog from '../components/ProductCatalog';
import ShoppingCart from '../components/ShoppingCart';

const ProductsPage = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <ProductCatalog />
      <ShoppingCart />
    </div>
  );
};

export default ProductsPage;
