import React, { useState } from "react";

const RecipeCard = ({ name, image, description, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`recipe-card-container ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="recipe-card">
        <div className="front">
          <img src={image} alt={name} className="recipe-image" />
          <div className="recipe-info">
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="view-recipe-btn">View Recipe</button>
          </div>
        </div>
        <div className="back">
          <h3>{name}</h3>
          <p>{details}</p>
          <button className="view-recipe-btn">Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
