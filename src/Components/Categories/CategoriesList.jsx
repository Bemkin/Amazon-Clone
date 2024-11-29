import React from 'react';

const CategoriesList = ({ categories, categoryImages, renderCategory }) => {
  return (
    <section className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-box">
          <h3>{category}</h3>
          <img src={categoryImages[category]} alt={category} />
          <button onClick={() => window.location.href = `${category}`}>
            Shop now
          </button>
        </div>
      ))}
    </section>
  );
};

export default CategoriesList;
