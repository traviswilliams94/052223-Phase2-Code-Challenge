import React from "react";

function Search({searchState, handleSearch}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        value={searchState}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
