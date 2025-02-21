import React from "react";
import Category from "./components/Category";
import { categories } from "./components/CategoriesData";
import RecipeCard from "./components/RecipeCard";
import { recipes } from "./components/RecipesData";


const HomePage = () => {
  const handleCategoryClick = (category) => {
    alert(`You clicked on ${category.name}`);
  };

  return (
    <div className="homepage">
      <h1>Food Categories</h1>
      <div className="categories-container">
        {categories.length > 0 ? (
          categories.map((category) => (
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
