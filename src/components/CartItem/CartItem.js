import './CartItem.css';
export const CartItem = ({ price, title, amount }) => {
  return (
    <tr className="cartRow">
      <td>{title}</td>
      <td>{amount}</td>
      <td>{price} Kč</td>
    </tr>
  );
};
