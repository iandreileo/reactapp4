import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import API_URL from './Const';
import Recipe from './Components/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // fetchRecipes('chicken');
  }, [])

  const fetchRecipes = () => {
    fetch(API_URL(query))
      .then((res) => res.json())
      .then((body) => setRecipes(body.hits))
    console.log(recipes)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetchRecipes(query);
  }

  const onChangeHandler = (e) => {
    // e.preventDefaultEvent();
    setQuery(e.target.value);
  }


  return (
    <div className="principalDiv">
      <div className="box">
        <h1>Recipes APP</h1>
        <break></break>
        <form onSubmit={onSubmitHandler}>
          <input 
            type="search"
            className="search"
            placeholder="Keywords.."
            value={query}
            onChange={onChangeHandler}
            />
        </form>
        <break></break>

        <div>{recipes[0] != undefined ? recipes.map((recipe, i) => <Recipe key={i} {...recipe}/>) : ''}</div>
      </div>
    </div>
  );
}

export default App;
