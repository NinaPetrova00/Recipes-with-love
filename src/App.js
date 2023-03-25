import { Route, Routes } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';
import { Login } from './components/user/login/Login';
import { Register } from './components/user/register/Register';
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
