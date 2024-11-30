import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import { useCart } from '../../Pages/Cart/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
        setRating(response.data.rating.rate);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleAddToCart = () => {
    addToCart(product); 
  };

  if (!product) {
    return (
      <div className="loading-container">
        <FadeLoader color="#007BFF" />
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="rating-container">
          {[...Array(5)].map((star, index) => (
            <span
              key={index}
              className={index < rating ? "star filled" : "star"}
              onClick={() => handleRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
