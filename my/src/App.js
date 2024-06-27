import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NowPlayingBar from './components/NowPlayingBar';
import SearchBar from './components/SearchBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

const App = () => {
  const [nowPlaying, setNowPlaying] = useState({
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yEOF24bLsdN1RzOuKZRW2PYBuECKoiOKfQ&s'
  });
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleSearch = (searchTerm) => {
    console.log('Search Term:', searchTerm);
    setSearchResults([]);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="main-content">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <SearchBar onSearch={handleSearch} />

      </div>
      <NowPlayingBar song={nowPlaying} />
    </div>
  );
};

export default App;
