import './FavouriteButton.css';

export const FavouriteButton = ({ isFav, onChange }) => {
  return (
    <button onClick={onChange}>
      {isFav ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
    </button>
  );
};
