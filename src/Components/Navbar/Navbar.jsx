import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

import profile from "../../Assets/profile.png"

const Navbar = () => {
  const {search,searchFunction} = useState()
  return (
    <nav className="navbar">
          <div className="search-bar">
            <FaSearch onClick={search}></FaSearch>
            <input type="text" placeholder="Search for rooms, guests..." className="search-input" />
      </div>

      <div className="right-section">
        <IoMdNotificationsOutline size="35px"></IoMdNotificationsOutline>
        <div className="profile-picture">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
