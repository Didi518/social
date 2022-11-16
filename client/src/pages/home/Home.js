import React from 'react';
import Leftbar from '../../components/LeftSideContainer/Leftbar';
import MainPost from '../../components/MainPostContainer/MainPost';
import Navbar from '../../components/Navbar/Navbar';
import Rightbar from '../../components/RightSideContainer/Rightbar';
import './home.css';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="componentContainer">
        <Leftbar />
        <MainPost />
        <Rightbar />
      </div>
    </div>
  );
}
