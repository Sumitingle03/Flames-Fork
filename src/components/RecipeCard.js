import React from "react";

const RecipeCard = ({ name, image, description }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-image" />
      <div className="recipe-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="view-recipe-btn">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;
