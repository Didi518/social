import React from 'react';
import './profileMainpost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import coverImg from '../Images/Profile.png';

export default function ProfileMainPost() {
  return (
    <div className="profileMainPostContainer">
      <div>
        <img src={coverImg} className="profileCoverImg" alt="profil" />
        <h2
          style={{
            marginTop: -40,
            color: 'white',
            textAlign: 'start',
            marginLeft: '34px',
          }}
        >
          Ton Profil
        </h2>
      </div>
      <ContentPost />
      <Post />
      <Post />
    </div>
  );
}
