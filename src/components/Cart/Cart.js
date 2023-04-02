import './Cart.css';

export const Cart = ({ showModal }) => {
  return (
    <div className="cart" onClick={showModal}>
      Košík (2) 200 Kč{' '}
    </div>
  );
};
