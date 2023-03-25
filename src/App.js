
//import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';
import { Login } from './components/user/login/Login';
function App() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
       {/* <Home></Home>  */}
      {/* <CatalogueItem></CatalogueItem> */}
    </div>
  );
}

export default App;
