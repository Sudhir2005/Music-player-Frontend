import React, { useState } from 'react';
import spotifyService from './spotifyService';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await spotifyService.searchTracks(searchTerm);
    onSearch(results);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for songs, artists, albums..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
