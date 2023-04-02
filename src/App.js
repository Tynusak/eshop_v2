import './App.css';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';
import { Cart } from './components/Cart/Cart';
import { LoadNextPageButton } from './components/buttons/LoadNextPageButton/LoadNextPageButton';
import { Article } from './components/Article/Article';

function App() {
  return (
    <div className="App">
      <h1>Techcrunch</h1>
      <div className="features">
        <Search />
        <Favourites />
        <Cart />
        <LoadNextPageButton />
      </div>
      <div className="articleBox">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
}

export default App;
