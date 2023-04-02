import './LoadNextPageButton.css';
export const LoadNextPageButton = ({ onLoadNextPage }) => {
  return (
    <button className="loadNextPageButton" onClick={onLoadNextPage}>
      Načíst další
    </button>
  );
};
