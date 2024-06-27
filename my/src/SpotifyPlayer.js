import React, { useEffect, useState } from 'react';

const SpotifyPlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [trackName, setTrackName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Spotify Clone Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', state => {
        if (!state) {
          return;
        }

        setTrackName(state.track_window.current_track.name);
        setArtistName(state.track_window.current_track.artists[0].name);
        setAlbumName(state.track_window.current_track.album.name);
        setIsPaused(state.paused);

        player.getCurrentState().then(state => {
          (!state) ? setIsPaused(true) : setIsPaused(state.paused);
        });
      });

      player.connect();
      setPlayer(player);
    };

    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, [token]);

  const handlePlay = () => {
    if (player && deviceId) {
      player.resume().then(() => {
        console.log('Resumed!');
      });
    }
  };

  const handlePause = () => {
    if (player) {
      player.pause().then(() => {
        console.log('Paused!');
      });
    }
  };

  return (
    <div>
      <h3>Now Playing</h3>
      <p>Track: {trackName}</p>
      <p>Artist: {artistName}</p>
      <p>Album: {albumName}</p>
      <button onClick={isPaused ? handlePlay : handlePause}>
        {isPaused ? 'Play' : 'Pause'}
      </button>
    </div>
  );
};

export default SpotifyPlayer;
