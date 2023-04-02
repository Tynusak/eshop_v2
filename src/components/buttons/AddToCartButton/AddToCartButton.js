import './AddToCartButton.css';

export const AddToCartButton = ({ onAddToCart }) => {
  return <button onClick={onAddToCart}>Přidat do košíku</button>;
};
