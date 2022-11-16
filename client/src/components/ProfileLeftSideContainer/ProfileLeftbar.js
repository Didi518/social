import React from 'react';
import './profileLeftbar.css';
import image from '../Images/Profile.png';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';

export default function ProfileLeftbar() {
  return (
    <div className="profileLeftbar">
      <div className="notificationsContainer">
        <img src={image} className="profilePageCover" alt="profil" />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}>
          <img src={image2} className="profilePageImg" alt="profil" />
          <div>
            <p
              style={{
                marginLeft: 6,
                marginTop: 20,
                color: 'black',
                textAlign: 'start',
              }}
            >
              Kevin
            </p>
            <p
              style={{
                marginLeft: 6,
                marginTop: -16,
                color: 'black',
                textAlign: 'start',
                fontSize: 11,
              }}
            >
              Développeur Web
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>
            Vues du profil
          </p>
          <p
            style={{
              color: 'black',
              marginRight: 20,
              fontSize: '12px',
              marginTop: 17,
            }}
          >
            43924
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: -20,
          }}
        >
          <p style={{ color: 'black', marginLeft: 20, fontSize: '14px' }}>
            Abonnés
          </p>
          <p
            style={{
              color: 'black',
              marginRight: 20,
              fontSize: '12px',
              marginTop: 17,
            }}
          >
            4324
          </p>
        </div>
        <div style={{ marginTop: -20 }}>
          <h5
            style={{
              color: 'black',
              marginLeft: 10,
              fontSize: '14px',
              marginRight: 30,
              marginTop: 30,
              textAlign: 'start',
            }}
          >
            Biographie
          </h5>
          <p
            style={{
              color: 'black',
              fontSize: '12px',
              marginTop: -20,
              textAlign: 'start',
              marginLeft: '10px',
            }}
          >
            追风... There is no one compares with you... 想想哦
          </p>
        </div>
        <button
          style={{
            width: '100%',
            paddingTop: 7,
            paddingBottom: 7,
            border: 'none',
            backgroundColor: 'green',
            color: 'white',
          }}
        >
          Editer la bio
        </button>
      </div>
      <div className="notificationsContainer">
        <h3>Suivis</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ marginLeft: 10 }}>Amis</p>
          <p style={{ marginRight: 10, color: '#aaa' }}>Voir tout</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: 5 }}>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image2} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Samir</p>
          </div>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image1} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Aurélien</p>
          </div>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image5} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Yohann</p>
          </div>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image3} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Samir</p>
          </div>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image6} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Aurélien</p>
          </div>
          <div style={{ marginLeft: 4, cursor: 'pointer' }}>
            <img src={image4} className="friendImg" alt="avatar ami" />
            <p style={{ marginTop: -2 }}>Yohann</p>
          </div>
        </div>
      </div>
    </div>
  );
}
