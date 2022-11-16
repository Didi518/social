import React from 'react';
import './leftbar.css';
import image from '../Images/Profile.png';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="notificationsContainer">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: '-14px' }}>Notifications</p>
          <p style={{ color: '#aaa', marginLeft: '40px' }}>Voir tout</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -13 }}>
          <img src={`${image}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Stuckens aime ton post.
          </p>
          <img src={`${image1}`} alt="amis" className="likeImg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}>
          <img src={`${image}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Sofian s'est mis à te suivre.
          </p>
          <img src={`${image2}`} alt="amis" className="followingUserImg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}>
          <img src={`${image2}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Stuckens aime ton post.
          </p>
          <img src={`${image3}`} alt="amis" className="likeImg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}>
          <img src={`${image}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Sofian s'est mis à te suivre.
          </p>
          <img src={`${image4}`} alt="amis" className="followingUserImg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}>
          <img src={`${image6}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Sofian s'est mis à te suivre'.
          </p>
          <img src={`${image5}`} alt="amis" className="followingUserImg" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: -10 }}>
          <img src={`${image3}`} className="notificationImg" alt="profil" />
          <p
            style={{
              marginLeft: '5px',
              color: '#aaa',
              fontSize: 13,
              textAlign: 'start',
              width: '120px',
            }}
          >
            Stuckens aime ton post.
          </p>
          <img src={`${image6}`} alt="amis" className="likeImg" />
        </div>
      </div>
      <div className="notificationsContainer">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: '-20px' }}>Découverte</p>
          <p style={{ color: '#aaa', marginLeft: '40px' }}>Voir tout</p>
        </div>
        <div>
          <img src={`${image}`} className="exploreImg" alt="Découverte" />
          <img src={`${image1}`} className="exploreImg" alt="Découverte" />
          <img src={`${image2}`} className="exploreImg" alt="Découverte" />
          <img src={`${image3}`} className="exploreImg" alt="Découverte" />
          <img src={`${image4}`} className="exploreImg" alt="Découverte" />
          <img src={`${image5}`} className="exploreImg" alt="Découverte" />
          <img src={`${image6}`} className="exploreImg" alt="Découverte" />
          <img src={`${image}`} className="exploreImg" alt="Découverte" />
        </div>
      </div>
    </div>
  );
}
