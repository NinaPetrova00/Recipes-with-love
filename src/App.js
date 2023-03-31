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
import * as recipeSerive from './components/service/RecipeService';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeSerive.getAll()
      .then(result =>
        setRecipes(result));
  }, []);

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/catalogue' element={<Catalogue recipes={recipes}></Catalogue>}></Route>
        <Route path='/details/:recipeId' element={<Details />} />
        <Route path='/create' element={<Create />} />
      </Routes>

      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
