import React from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
         {theme === 'light' ? '🌚' : '🌝'} 
      </button>
    </div>
  );
};

export default ThemeSwitcher;
