import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';
import { Catalogue } from './components/recipes/catalogue/Catalogue';
import { Login } from './components/user/login/Login';
import { Register } from './components/user/register/Register';
import { Details } from './components/recipes/catalogue/details/Details';
import './App.css';
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/catalogue' element={<Catalogue></Catalogue>}></Route>
        <Route path='/details' element={<Details />} />
      </Routes>

      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
