import React from 'react';
import './Sidebar.css';
import logo from "../../Assets/logo.png"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </aside>
  );
};

export default Sidebar;