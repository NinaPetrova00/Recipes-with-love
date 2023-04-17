import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import { AuthProvider } from './context/AuthContext';
import { UserRecipes } from './components/recipes/userRecipes/UserRecipes';
import { SearchCatalogue } from './components/recipes/catalogue/searchCatalogue/SerachCatalogue';

function App() {
  return (
    <div>
      {/* //TODO: change backgound color? */}

      <AuthProvider >
        <Header />
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
          <Route path='/catalogue/myRecipes' element={<UserRecipes></UserRecipes>}></Route>

          <Route path='/catalogue/search' element={<SearchCatalogue></SearchCatalogue>}></Route>

          <Route path='/details/:recipeId' element={<Details />} />
          <Route path='/edit/:recipeId' element={<Edit />} />
          <Route path='/delete/:recipeId' element={<Delete />} />

          <Route path='/create' element={<Create />} />

        </Routes>
      </AuthProvider>

    </div>
  );
}

export default App;
