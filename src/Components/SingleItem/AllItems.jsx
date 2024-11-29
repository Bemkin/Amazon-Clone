import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleItem from './SingleItem';
import './AllItems.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="all-items-container">
      {items.map((item) => (
        <SingleItem key={item.id} itemId={item.id} />
      ))}
    </section>
  );
};

export default AllItems;
