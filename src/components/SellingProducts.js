import React from 'react';
import products from '../data/products';

const SellingProducts = () => {
  return (
    <div>
      <h1>Selling Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellingProducts;