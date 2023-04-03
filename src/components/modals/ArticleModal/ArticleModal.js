import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { FavouriteButton } from '../../buttons/FavouriteButton/FavouriteButton';
import { AddToCartButton } from '../../buttons/AddToCartButton/AddToCartButton';
import { Amount } from '../../Amount/Amount';

export const ArticleModal = ({
  isOpen,
  id,
  onClose,
  cartItem,
  onCartChange,
  onFavChange,
}) => {
  const [article, setArticle] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const loadArticle = async (id) => {
    try {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts/${id}`,
      );
      setArticle(response.data);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };
  useEffect(() => {
    loadArticle(id);
  }, [id]);
  return (
    <Modal isOpen={isOpen}>
      {!article ? (
        <p>Loading..</p>
      ) : (
        <>
          <div>
            <h3>{article?.parselyMeta?.['parsely-title']}</h3>
            <h4>Written by {article?.parselyMeta?.['parsely-author']}</h4>
            <p>{article?.date}</p>
            <a href={article.link} target="_blank">
              Otevřít článek
            </a>
            <p>Cena: {article?.id} Kč</p>
          </div>
          <div>
            <FavouriteButton isFav={cartItem?.inFavs} onChange={onFavChange} />
            {cartItem?.amount === 0 ? (
              <AddToCartButton onAddToCart={() => onCartChange(1)} />
            ) : (
              <Amount amount={cartItem?.amount} onChange={onCartChange} />
            )}
          </div>
        </>
      )}
      <div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </Modal>
  );
};
