import React from 'react';
function Search({ setSearched }) {
  const { searchedEmote, setSearch } = setSearched;
  return (
    <div className="search-section">
      <h1>Emotes</h1>
      <input
        autoFocus
        type="search"
        value={searchedEmote}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder={'Type here to search'}
      />
    </div>
  );
}
export default Search;
