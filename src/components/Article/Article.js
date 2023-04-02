import './Article.css';
import { FavouriteButton } from '../buttons/FavouriteButton/FavouriteButton';
import { AddToCartButton } from '../buttons/AddToCartButton/AddToCartButton';
import { useState } from 'react';

export const Article = ({ title, showModal }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="article">
      <h3 className="article__title" onClick={showModal}>
        {title}
      </h3>
      <div className="article__buttonBox">
        <FavouriteButton />
        {count === 0 ? (
          <AddToCartButton />
        ) : (
          <div>
            <button>+</button> <span>{count}</span> <button>-</button>
          </div>
        )}
      </div>
    </div>
  );
};
