import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../../Pages/Cart/CartContext'; 
import './SingleItem.css';

const SingleItem = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [rating, setRating] = useState(0);
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${itemId}`);
        setItem(response.data);
        setRating(response.data.rating.rate);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [itemId]);

  const handleAddToCart = () => {
    if (item) {
      addToCart(item);
    }
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-item-container">
      <h2>{item.title}</h2>
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.title} />
      </Link>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <div className="rating-container">
        {[...Array(5)].map((star, index) => (
          <span
            key={index}
            className={index < rating ? "star filled" : "star"}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default SingleItem;
