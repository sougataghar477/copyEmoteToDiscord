import React from 'react';
const Search = React.forwardRef(function ({ setSearched }, inputRef) {
  let { searchedEmote, setSearch } = setSearched;
  return (
    <div className="search-section">
      <h1>Emotes</h1>
      <input
        ref={inputRef}
        autoFocus={true}
        type="search"
        value={searchedEmote}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type here to search"
      />
    </div>
  );
});
export default Search;
