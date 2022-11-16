import React from 'react';
import './contentpost.css';
import profileImg from '../Images/Profile.png';
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import videoIcon from '../Images/video.png';

export default function ContentPost() {
  return (
    <div>
      <div className="contentUploadContainer">
        <div style={{ display: 'flex', alignItems: 'center', padding: 10 }}>
          <img src={profileImg} className="profileImage" alt="profil" />
          <input
            type="text"
            className="contentWrittingPart"
            placeholder="Décris ce qui te passe par la tête..."
          />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={imageIcon} className="icon" alt="upload des images" />
            <img src={emojiIcon} className="icon" alt="insert des émojis" />
            <img src={videoIcon} className="icon" alt="upload des vidéos" />
            <button
              style={{
                height: '30px',
                marginRight: '12px',
                marginTop: '40px',
                paddingLeft: '20px',
                paddingRight: '20px',
                paddingTop: 6,
                paddingBottom: 6,
                border: 'none',
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Envoi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
