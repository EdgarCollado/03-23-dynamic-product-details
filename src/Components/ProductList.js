import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {Object.keys(products).map((productId) => {
          const product = products[productId];
          return (
            <li key={productId}>
              <Link to={`/product/${productId}`}><strong>{product.name}</strong> - {product.description} - $
              {product.price}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
