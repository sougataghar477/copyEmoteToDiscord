import React from 'react';
function Search({ setSearched }) {
  let { searchedEmote, setSearch } = setSearched;
  return (
    <div className="search-section">
      <h1>Copy Discord Emotes</h1>
      <input
        autoFocus={true}
        type="search"
        value={searchedEmote}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here to search"
      />
    </div>
  );
}
export default Search;
