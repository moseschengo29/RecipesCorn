import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const API_KEY = "e234220dbda64365b25b5fe09b8b83d3";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipes(data.recipes);
    }
    getRecipes();
  }, []);

  return (
    <div>
      <header>
        <Link to='/'><h1>RecipesCorn</h1></Link>
      </header>
      <div className="container">
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt="recipe" />
              <h2>{recipe.title}</h2>
              <p>
                <strong>Ingredients:</strong>{" "}
                {recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
              </p>
              <a target='_blank' href={recipe.sourceUrl}>View Recipe</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;






