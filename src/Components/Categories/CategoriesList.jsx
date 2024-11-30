import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const CategoriesList = ({ categories, categoryImages }) => {
  return (
    <section className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-box">
          <Link to={`/category/${category}`}>
            <h3>{category}</h3>
            <img src={categoryImages[category]} alt={category} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default CategoriesList;
