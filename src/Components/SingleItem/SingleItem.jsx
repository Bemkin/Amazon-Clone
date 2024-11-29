import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SingleItem.css';

const SingleItem = ({ itemId }) => {
  const [item, setItem] = useState(null);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${itemId}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchItem();
  }, [itemId]);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality
    alert("Item added to cart!");
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-item-container">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
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
  );
};

export default SingleItem;
