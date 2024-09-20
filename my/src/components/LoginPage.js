import React from 'react';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <h2>Login to Music Player</h2>
      <button onClick={onLogin}>Login with Spotify</button>
    </div>
  );
};

export default LoginPage;
