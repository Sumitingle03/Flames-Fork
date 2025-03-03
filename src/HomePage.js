import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import Link
import Category from "./components/Category";
import { categories } from "./components/CategoriesData";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./components/RecipesData";

const HomePage = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate=useNavigate()

  const handleCategoryClick = (category) => {
    alert(`You clicked on ${category.name}`);
  };

  return (
    <div className="homepage">
      <div className="auth-buttons">
  <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
  <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
</div>
      <h1>Food Categories</h1>
      <div className="categories-container">
        {categories.length > 0 ? (
          categories.slice(0, showMore ? categories.length : 4).map((category) => (
            <Category
              key={category.name}
              name={category.name}
              image={category.image}
              onClick={() => handleCategoryClick(category)}
            />
          ))
        ) : (
          <p>No categories found.</p>
        )}
        {categories.length > 4 && (
          <button className="view-more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "View Less" : "View More"}
          </button>
        )}
      </div>
      {/* Recipe Cards Section */}
      <h1>Popular Recipes</h1>
      <div className="recipes-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.name}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

