import React from "react";

const ProductInfo = () => {
  const product = {
    name: "Google pixel6a",
    price: 30000,
    availability: "In Stock",
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Availability:</strong> {product.availability}</p>
    </div>
  );
};

export default ProductInfo;