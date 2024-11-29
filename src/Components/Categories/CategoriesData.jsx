import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesData = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoryImages, setCategoryImages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get('https://fakestoreapi.com/products/categories');
        const categories = categoriesResponse.data;
        setCategories(categories);

        // Fetch images for each category
        const images = {};
        for (const category of categories) {
          const productsResponse = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          images[category] = productsResponse.data[0].image; // Use the first product image from each category
        }
        setCategoryImages(images);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return children({ categories, categoryImages });
};

export default CategoriesData;
