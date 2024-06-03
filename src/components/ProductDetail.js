import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on productId here
    const productData = [
      {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "This is a great product.",
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "This is another great product.",
      },
    ];
    const foundProduct = productData.find((p) => p.id === parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
