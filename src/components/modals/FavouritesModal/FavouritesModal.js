import Modal from 'react-modal';

export const FavouritesModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      Oblíbené
      <div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </Modal>
  );
};
