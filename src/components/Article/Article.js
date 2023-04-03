import './Article.css';
import { FavouriteButton } from '../buttons/FavouriteButton/FavouriteButton';
import { AddToCartButton } from '../buttons/AddToCartButton/AddToCartButton';
import { Amount } from '../Amount/Amount';

export const Article = ({ showModal, onCartChange, onFavChange, data }) => {
  return (
    <div className="article">
      <h3 className="article__title" onClick={showModal}>
        {data.title}
      </h3>
      <div className="article__buttonBox">
        <FavouriteButton onChange={onFavChange} isFav={data.inFavs} />
        {data.amount === 0 ? (
          <AddToCartButton
            onAddToCart={() => {
              onCartChange(1);
            }}
          />
        ) : (
          <Amount amount={data.amount} onChange={onCartChange} />
        )}
      </div>
    </div>
  );
};
