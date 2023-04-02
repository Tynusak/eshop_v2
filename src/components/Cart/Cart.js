import './Cart.css';

export const Cart = ({ totalAmount, totalPrice, showModal }) => {
  return (
    <div className="cart" onClick={showModal}>
      Košík ({totalAmount}) {totalPrice} Kč{' '}
    </div>
  );
};
