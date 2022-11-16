import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProfileLeftbar from '../../components/ProfileLeftSideContainer/ProfileLeftbar';
import ProfileMainPost from '../../components/ProfileMainPostContainer/ProfileMainPost';
import ProfileRightbar from '../../components/ProfileRightSideContainer/ProfileRightbar';
import './profile.css';

export default function Profile() {
  return (
    <div className="profileContainer">
      <Navbar />
      <div className="subProfileContainer">
        <ProfileLeftbar />
        <ProfileMainPost />
        <ProfileRightbar />
      </div>
    </div>
  );
}
