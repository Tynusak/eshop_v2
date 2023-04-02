import './Favourites.css';

export const Favourites = ({ showModal }) => {
  return (
    <div className="favourites" onClick={showModal}>
      Oblíbené články
    </div>
  );
};
