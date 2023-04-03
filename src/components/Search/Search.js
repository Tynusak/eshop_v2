import './Search.css';

export const Search = () => {
  return (
    <form className="search" id="search">
      <label htmlFor="search-form">
        Search
        <input type="search" name="search-form" id="search-form" />
      </label>
    </form>
  );
};
