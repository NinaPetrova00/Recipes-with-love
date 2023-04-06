import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Catalogue } from './components/recipes/catalogue/Catalogue';
import { Details } from './components/recipes/details/Details';
import { Edit } from './components/recipes/edit/Edit';
import { Create } from './components/recipes/create/Create';
import { Delete } from './components/recipes/delete/Delete';

import { Login } from './components/user/login/Login';
import { Register } from './components/user/register/Register';
import { Logout } from './components/user/logout/Logout';


import './App.css';
import * as recipeService from './components/services/RecipeService';

import { RecipeContext } from './context/RecipeContext';
import { AuthContext, AuthProvider } from './context/AuthContext';


function App() {
  const [recipes, setRecipes] = useState([]);

  // const { user } = useContext(AuthContext);

  useEffect(() => {
    recipeService.getAll()
      .then(result =>
        setRecipes(result));
  }, []);


  return (
    <div>
      {/* //todo: add value={user} */}
      <AuthProvider >
        <Header />

        {/* <RecipeContext.Provider value={recipes}> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />


          <Route path='/catalogue/vegan' element={<Catalogue recipeType={"vegan"} ></Catalogue>}></Route>
          <Route path='/catalogue/vegetarian' element={<Catalogue recipeType={"vegetarian"} ></Catalogue>}></Route>
          <Route path='/catalogue/highProtein' element={<Catalogue recipeType={"highProtein"} ></Catalogue>}></Route>
          <Route path='/catalogue/lowSugar' element={<Catalogue recipeType={"lowSugar"}></Catalogue>}></Route>
          <Route path='/catalogue/glutenFree' element={<Catalogue recipeType={"glutenFree"} ></Catalogue>}></Route>
          <Route path='/catalogue/lactoseFree' element={<Catalogue recipeType={"lactoseFree"} ></Catalogue>}></Route>

          <Route path='/catalogue/lactoseFree' element={<Catalogue recipeType={"lactoseFree"} ></Catalogue>}></Route>

          <Route path='/details/:recipeId' element={<Details />} />
          <Route path='/edit/:recipeId' element={<Edit />} />
          <Route path='/delete/:recipeId' element={<Delete />} />

          <Route path='/create' element={<Create />} />

        </Routes>
      </AuthProvider>
      {/* </RecipeContext.Provider> */}
    </div>
  );
}

export default App;
