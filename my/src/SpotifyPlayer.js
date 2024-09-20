import React from 'react';

const SpotifyPlayer = ({ token }) => {
  return (
    <div>
      <h2>Spotify Player</h2>
      <p>Playing music with token: {token}</p>
    </div>
  );
};

export default SpotifyPlayer;
