import React from "react";

const Category = ({ name, image, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <img src={image} alt={name} className="category-image" />
      <h3 className="category-name">{name}</h3>
    </div>
  );
};

export default Category;
