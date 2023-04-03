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
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState([]);
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

      const defaults = response?.data.map((item) => ({
        id: item.id,
        title: item.title.rendered,
        inFavs: false,
        amount: 0,
      }));

      const newModalData = [...modalData, ...defaults];
      setModalData(newModalData);
    } catch (error) {
      setErrorMessage(error?.message);
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

  const handleFavs = (index) => {
    const favItems = [...modalData];
    favItems[index].inFavs = !modalData[index].inFavs;
    setModalData(favItems);
  };

  const handleCart = (index, cartAmount) => {
    const cartItems = [...modalData];
    cartItems[index].amount = cartAmount;
    setModalData(cartItems);
  };
  useEffect(() => {
    loadData();
  }, [page]);

  let productCount = 0;
  let totalPriceCount = 0;
  modalData.forEach((item) => (productCount += item.amount));
  modalData.forEach((item) => (totalPriceCount += item.id * item.amount));

  return (
    <div className="App">
      <h1>Techcrunch articles</h1>

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
            <FavouritesModal
              isOpen={openFavs}
              onClose={closeFavsModal}
              data={modalData}
            />
            <Cart
              totalAmount={productCount}
              totalPrice={totalPriceCount}
              showModal={() => {
                openCartModal();
              }}
            />
            <CartModal
              isOpen={openCart}
              onClose={closeCartModal}
              data={modalData}
              totalAmount={productCount}
              totalPrice={totalPriceCount}
            />

            <LoadNextPageButton onLoadNextPage={handleLoading} />
          </div>
          <div className="articleBox">
            {data?.map((item, index) => (
              <Article
                key={item.id}
                showModal={() => {
                  openArticleModal(index, item.id);
                }}
                data={modalData?.find((article) => article.id === item.id)}
                onCartChange={(cartAmount) =>
                  handleCart(
                    modalData?.findIndex((article) => article.id === item.id),
                    cartAmount,
                  )
                }
                onFavChange={() =>
                  handleFavs(
                    modalData?.findIndex((article) => article.id === item.id),
                  )
                }
              />
            ))}
            <ArticleModal
              isOpen={openArticle}
              id={id}
              onClose={closeArticleModal}
              cartItem={modalData?.find((item) => item.id === id)}
              onFavChange={() =>
                handleFavs(modalData?.findIndex((item) => item.id === id))
              }
              onCartChange={(cartAmount) =>
                handleCart(
                  modalData?.findIndex((item) => item.id === id),
                  cartAmount,
                )
              }
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
