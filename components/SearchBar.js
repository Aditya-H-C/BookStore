// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="flex justify-center mt-4 mb-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by Author"
          className="border rounded-lg py-2 px-4 outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white font-bold rounded-lg py-2 px-4 hover:bg-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
