import Modal from 'react-modal';

export const CartModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      Košík (2) 200 Kč
      <div>
        <button onClick={onClose}>Zavřít</button>
      </div>
    </Modal>
  );
};
