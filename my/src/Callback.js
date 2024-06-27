import React, { useEffect } from 'react';

const Callback = ({ setToken }) => {
  useEffect(() => {
    // Simulate getting the token from URL
    const fakeToken = 'YOUR_SPOTIFY_TOKEN';
    localStorage.setItem('spotify_token', fakeToken);
    setToken(fakeToken);
    // Navigate to the dashboard
    window.location.href = '/';
  }, [setToken]);

  return <div>Loading...</div>;
};

export default Callback;
