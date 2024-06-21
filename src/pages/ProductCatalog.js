import React, { useState, useEffect } from 'react';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCatalog;
