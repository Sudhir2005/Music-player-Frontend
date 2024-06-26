import React from 'react';
import './NowPlayingBar.css';

const NowPlayingBar = ({ song }) => {
  return (
    <div className="now-playing-bar">
      <div className="song-info">
        <img src={song.imageUrl} alt={song.title} className="song-image" />
        <div className="song-details">
          <span className="song-title">{song.title}</span>
          <span className="song-artist">{song.artist}</span>
        </div>
      </div>
      <div className="player-controls">
        <button>⏮️</button>
        <button>▶️</button>
        <button>⏭️</button>
      </div>
    </div>
  );
};

export default NowPlayingBar;
