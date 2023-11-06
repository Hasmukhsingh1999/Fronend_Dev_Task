import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return <div>
    
  </div>;
};

export default ProductDetail;
