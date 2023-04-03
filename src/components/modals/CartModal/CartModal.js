import Modal from 'react-modal';
import { CartItem } from '../../CartItem/CartItem';

export const CartModal = ({
  isOpen,
  onClose,
  data,
  totalPrice,
  totalAmount,
}) => {
  const inCart = data.filter((item) => item.amount > 0);
  return (
    <Modal isOpen={isOpen}>
      {inCart.length === 0 ? (
        <p>Košík je prázdný</p>
      ) : (
        <>
          <table>
            <thead>
              {' '}
              <tr>
                <th>Článek</th>
                <th>Množství</th>
                <th>Cena</th>
              </tr>
            </thead>

            <tbody>
              {inCart?.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.id}
                  amount={item.amount}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>{totalAmount} ks</th>
                <th>{totalPrice} Kč</th>
              </tr>
            </tfoot>
          </table>
          <div>
            <button>Koupit</button>
          </div>
        </>
      )}

      <div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </Modal>
  );
};
