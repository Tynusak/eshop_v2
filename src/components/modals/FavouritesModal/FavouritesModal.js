import Modal from 'react-modal';
import { FavItem } from '../../FavItem/FavItem';

export const FavouritesModal = ({ isOpen, onClose, data }) => {
  const isFav = data.filter((item) => item.isFav);
  return (
    <Modal isOpen={isOpen}>
      {isFav.length === 0 ? (
        <p>Nemáte žádné oblíbené články</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Oblíbené články</th>
            </tr>
          </thead>
          <tbody>
            {isFav?.map((item, index) => (
              <FavItem key={item.id} title={item.title} index={index + 1} />
            ))}
          </tbody>
        </table>
      )}

      <div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </Modal>
  );
};
