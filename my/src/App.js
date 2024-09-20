import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NowPlayingBar from './components/NowPlayingBar';
import SearchBar from './components/SearchBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import LoginPage from './components/LoginPage';
import Callback from './Callback';
import SpotifyPlayer from './SpotifyPlayer';
import './App.css';

const App = () => {
  const [nowPlaying, setNowPlaying] = useState({
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    imageUrl: 'https://via.placeholder.com/150',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState('light');
  const [token, setToken] = useState(localStorage.getItem('spotify_token'));
  const [currentPage, setCurrentPage] = useState(token ? 'dashboard' : 'login');

  useEffect(() => {
    const storedToken = localStorage.getItem('spotify_token');
    if (storedToken) {
      setToken(storedToken);
      setCurrentPage('dashboard');
    } else {
      const hash = window.location.hash;
      let token = window.localStorage.getItem("token");

      if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
        window.location.hash = "";
        window.localStorage.setItem("token", token);
      }

      setToken(token);
    }
  }, []);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme');
  };

  const handleLogin = () => {
    const clientId = '12103010db054e7d9913f4c640ca973b';
    const redirectUri = 'http://localhost:3000/callback';
    const apiUrl = 'https://accounts.spotify.com/authorize';
    const scope = 'user-read-private user-read-email';
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code&show_dialog=true`;
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('spotify_token');
    setCurrentPage('login');
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="main-content">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        {currentPage === 'login' && <LoginPage onLogin={handleLogin} />}
        {currentPage === 'dashboard' && token && (
          <>
            <SearchBar onSearch={handleSearch} />
            <SpotifyPlayer token={token} />
            <Dashboard searchResults={searchResults} />
          </>
        )}
        {currentPage === 'callback' && <Callback setToken={setToken} />}
      </div>
      <NowPlayingBar song={nowPlaying} />
    </div>
  );
};

export default App;
