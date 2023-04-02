import './Article.css';
import { FavouriteButton } from '../buttons/FavouriteButton/FavouriteButton';
import { AddToCartButton } from '../buttons/AddToCartButton/AddToCartButton';

export const Article = ({ title }) => {
  return (
    <div className="article">
      <h3 className="article__title">{title}</h3>
      <div className="article__buttonBox">
        <FavouriteButton />
        <AddToCartButton />
      </div>
    </div>
  );
};
