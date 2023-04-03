import './Article.css';
import { FavouriteButton } from '../buttons/FavouriteButton/FavouriteButton';
import { AddToCartButton } from '../buttons/AddToCartButton/AddToCartButton';
import { Amount } from '../Amount/Amount';
import { useState } from 'react';

export const Article = ({ title, showModal, onCartChange, amount }) => {
  return (
    <div className="article">
      <h3 className="article__title" onClick={showModal}>
        {title}
      </h3>
      <div className="article__buttonBox">
        <FavouriteButton />
        {amount === 0 ? (
          <AddToCartButton
            onAddToCart={() => {
              onCartChange(1);
            }}
          />
        ) : (
          <Amount amount={amount} onChange={onCartChange} />
        )}
      </div>
    </div>
  );
};
