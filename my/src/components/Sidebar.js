import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons
import './Sidebar.css';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-header">
        <button className="toggle-btn btn btn-link" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isCollapsed || !isHovered ? faBars : faAngleDoubleLeft} />
        </button>
        <br/>
        <br/>
        <h4></h4>
      </div>
      <ul className="list-unstyled">
        <li><a href="#" className="btn btn-link btn-block">Your Library</a></li>
        <li><a href="#" className="btn btn-link btn-block">Liked Songs</a></li>
        <li><a href="#" className="btn btn-link btn-block">Fav Songs</a></li>
        <li><a href="#" className="btn btn-link btn-block">Most Listened</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
