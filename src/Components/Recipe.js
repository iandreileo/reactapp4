import React from 'react';


const Recipe = (recipe) => {
    console.log(recipe);
    return (
        <div>
            <h4>Name: {recipe.recipe.label}</h4>
            <h5>Calories: {recipe.recipe.calories}</h5>
            <h5></h5>
        </div>
        
    );
}

export default Recipe;