import React from 'react';
import CategoriesData from './CategoriesData';
import CategoriesList from './CategoriesList';
import './Categories.css';

const CategoriesDisplay = () => {
  return (
    <CategoriesData>
      {({ categories, categoryImages }) => (
        <CategoriesList
          categories={categories}
          categoryImages={categoryImages}
          renderCategory={(category, image) => (
            <>
              <img src={image} alt={category} />
              <h3>{category}</h3>
              <button onClick={() => window.location.href = `/category/${category}`}>
                Shop now
              </button>
            </>
          )}
        />
      )}
    </CategoriesData>
  );
};

export default CategoriesDisplay;
