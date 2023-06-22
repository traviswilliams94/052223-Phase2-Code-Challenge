import React from "react";

function Search({searchState, handleSearch, onChangeSort, sort}) {

function handleSortChange(e){
  onChangeSort(e.target.value)
}

  return (
    <div className="ui large fluid icon input">
      <label>
        <strong>Sort By: </strong>
        <select onChange={handleSortChange} value={sort}>
          <option value="Category">Category</option>
          <option value="Description">Description</option>
        </select>
      </label>
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
