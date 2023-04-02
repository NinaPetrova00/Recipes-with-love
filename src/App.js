import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Auth } from 'firebase/auth';
import { db } from './config/firebase';


import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalogue } from './components/recipes/catalogue/Catalogue';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';
import { Login } from './components/user/login/Login';
import { Register } from './components/user/register/Register';
import { Details } from './components/recipes/details/Details';
import { Create } from './components/recipes/create/Create';
import './App.css';
import * as recipeService from './components/service/RecipeService';
import { RecipeContext } from './context/RecipeContext';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
      .then(result =>
        setRecipes(result));
  }, []);


  return (
    <div>
      <Header />

      {/* <RecipeContext.Provider value={recipes}> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/catalogue/vegan' element={<Catalogue recipeType={"vegan"} ></Catalogue>}></Route>
        <Route path='/catalogue/vegetarian' element={<Catalogue recipeType={"vegetarian"} ></Catalogue>}></Route>
        <Route path='/catalogue/highProtein' element={<Catalogue recipeType={"highProtein"} ></Catalogue>}></Route>
        <Route path='/catalogue/lowSugar' element={<Catalogue recipeType={"lowSugar"}></Catalogue>}></Route>
        <Route path='/catalogue/glutenFree' element={<Catalogue recipeType={"glutenFree"} ></Catalogue>}></Route>
        <Route path='/catalogue/lactoseFree' element={<Catalogue recipeType={"lactoseFree"} ></Catalogue>}></Route>

        <Route path='/details/:recipeId' element={<Details />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      {/* </RecipeContext.Provider> */}
      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
