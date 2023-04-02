import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';
import { Cart } from './components/Cart/Cart';
import { LoadNextPageButton } from './components/buttons/LoadNextPageButton/LoadNextPageButton';
import { Article } from './components/Article/Article';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleLoading = () => {
    const newPage = page + 1;
    setPage(newPage);
  };
  const loadData = async () => {
    try {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts?per_page=9&page=${page}&context=embed`,
      );
      setData(response.data);
      console.log(data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <div className="App">
      <h1>Techcrunch</h1>

      {!data ? (
        <p>Loading..</p>
      ) : (
        <>
          <div className="features">
            <Search />
            <Favourites />
            <Cart />
            <LoadNextPageButton onLoadNextPage={handleLoading} />
          </div>
          <div className="articleBox">
            {data.map((item) => {
              return <Article key={item.id} title={item.title.rendered} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
