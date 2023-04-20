import React from "react";

function ProductDetails() {
  const handleSave = () => {
    // Navigate to /products
  };
  return (
    <>
      <div>
        <h1>Product Details -</h1>
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
}

export default ProductDetails;
