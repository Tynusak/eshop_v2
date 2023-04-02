import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Search } from './components/Search/Search';
import { Favourites } from './components/Favourites/Favourites';
import { FavouritesModal } from './components/modals/FavouritesModal/FavouritesModal';
import { Cart } from './components/Cart/Cart';
import { CartModal } from './components/modals/CartModal/CartModal';
import { LoadNextPageButton } from './components/buttons/LoadNextPageButton/LoadNextPageButton';
import { Article } from './components/Article/Article';
import { ArticleModal } from './components/modals/ArticleModal/ArticleModal';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [favs, setFavs] = useState([]);
  const [cart, setCart] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [openFavs, setOpenFavs] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openArticle, setOpenArticle] = useState(false);
  const [id, setId] = useState('');
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
      console.log(data[0]);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  const openFavsModal = () => {
    setOpenFavs(true);
  };

  const closeFavsModal = () => {
    setOpenFavs(false);
  };

  const openCartModal = () => {
    setOpenCart(true);
  };

  const closeCartModal = () => {
    setOpenCart(false);
  };

  const openArticleModal = (index, newId) => {
    setOpenArticle(true);
    const newData = [...data];
    newId = newData[index].id;
    setId(newId);
  };
  const closeArticleModal = () => {
    setOpenArticle(false);
  };

  const handleCart = () => {
    console.log('Funguju');
  };

  useEffect(() => {
    loadData();
  }, [page]);

  let productCount = 0;
  let totalPriceCount = 0;

  return (
    <div className="App">
      <h1>Techcrunch</h1>

      {!data ? (
        <p>Loading..</p>
      ) : (
        <>
          <div className="features">
            <Search />
            <Favourites
              showModal={() => {
                openFavsModal();
              }}
            />
            <FavouritesModal isOpen={openFavs} onClose={closeFavsModal} />
            <Cart
              totalAmount={productCount}
              totalPrice={totalPriceCount}
              showModal={() => {
                openCartModal();
              }}
            />
            <CartModal isOpen={openCart} onClose={closeCartModal} />

            <LoadNextPageButton onLoadNextPage={handleLoading} />
          </div>
          <div className="articleBox">
            {data?.map((item, index) => (
              <Article
                key={item.id}
                title={item.title.rendered}
                showModal={() => {
                  openArticleModal(index, item.id);
                }}
                onCartChange={handleCart}
              />
            ))}
            <ArticleModal
              isOpen={openArticle}
              id={id}
              onClose={closeArticleModal}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
