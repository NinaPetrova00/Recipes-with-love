
//import './App.css';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { RecipeItem } from './components/recipes/recipe-item/RecipeItem';

function App() {
  return (
    <div>
      <Header></Header>
      {/* <Home></Home> */}
      <RecipeItem></RecipeItem>
    </div>
  );
}

export default App;
