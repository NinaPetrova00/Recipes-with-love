
//import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { CatalogueItem } from './components/recipes/catalogue/catalogue-item/CatalogueItem';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <CatalogueItem></CatalogueItem>
    </div>
  );
}

export default App;
