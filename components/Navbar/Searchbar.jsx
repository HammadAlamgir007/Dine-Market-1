import React from 'react';
import { CiSearch } from 'react-icons/ci';
const Searchbar = () => {
  return (
    <div className="search-bar">
      <CiSearch className="search-icon" />
      <input
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
};

export default Searchbar;
