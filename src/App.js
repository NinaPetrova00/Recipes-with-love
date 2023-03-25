
//import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';
import { Login } from './components/user/login/Login';
import { Register } from './components/user/register/Register';
function App() {
  return (
    <div>
      <Header></Header>
      {/* <Login></Login> */}
      <Register></Register>
       {/* <Home></Home>  */}
      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
