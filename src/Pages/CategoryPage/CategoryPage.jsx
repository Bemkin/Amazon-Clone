import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SingleItem from '../../Components/SingleItem/SingleItem';
import { FadeLoader } from 'react-spinners';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items:", error);
        setLoading(false);
      }
    };
    fetchItems();
  }, [categoryName]);

  if (loading) {
    return (
      <div className="loading-container">
        <FadeLoader color="#007BFF" />
      </div>
    );
  }

  return (
    <div className="category-page-container">
      <h1>Category: {categoryName}</h1>
      <div className="category-items-container">
        {items.map((item) => (
          <SingleItem key={item.id} itemId={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
