import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
   const [recipes, setRecipes] = useState([]);

   useEffect(() => {
       axios.get('http://localhost:3000/recipes')
           .then(response => setRecipes(response.data))
           .catch(error => console.error(error));
   }, []);

   return (
       <div>
           <h1>Recipes</h1>
           <ul>
               {recipes.map(recipe => (
                   <li key={recipe._id}>{recipe.title}</li>
               ))}
           </ul>
       </div>
   );
};

export default RecipeList;
