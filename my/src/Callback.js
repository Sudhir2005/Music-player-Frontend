import React, { useEffect } from 'react';

const Callback = ({ setToken }) => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      fetch('http://localhost:8888/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem('spotify_token', data.access_token);
            setToken(data.access_token);
            window.location.href = '/';
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  }, [setToken]);

  return <div>Loading...</div>;
};

export default Callback;
