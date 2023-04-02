import Modal from 'react-modal';

export const ArticleModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <button onClick={onClose}>Zavřít</button>
    </Modal>
  );
};
