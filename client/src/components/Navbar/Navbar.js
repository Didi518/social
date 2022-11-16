import React from 'react';
import './navbar.css';
import searchIcon from '../Images/search.png';
import Notifications from '../Images/bell.png';
import Message from '../Images/message.png';
import profileImage from '../Images/Profile.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="mainNavbar">
      <div className="logoContainer">
        <p>Social</p>
      </div>
      <div>
        <div className="searchInputContainer">
          <img src={`${searchIcon}`} alt="recherche" className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="recherche tes amis"
            name=""
            id=""
          ></input>
        </div>
      </div>
      <div className="iconsContainer">
        <img src={`${Notifications}`} alt="notifications" className="icons" />
        <img src={`${Message}`} alt="messages" className="icons" />
        <Link to={'/profil/619199821073'}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={`${profileImage}`}
              alt="profil"
              className="profileImage"
            />
            <p style={{ marginLeft: '5px' }}>Kevin</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
