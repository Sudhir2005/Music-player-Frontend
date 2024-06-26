import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NowPlayingBar from './components/NowPlayingBar';
import './App.css';

const App = () => {
  const [nowPlaying, setNowPlaying] = useState({
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    imageUrl: 'https://via.placeholder.com/150'
  });

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Dashboard />
      </div>
      <NowPlayingBar song={nowPlaying} />
    </div>
  );
};

export default App;
