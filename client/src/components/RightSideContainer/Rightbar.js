import React from 'react';
import './rightbar.css';
import ads from '../Images/ads.jpg';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import addFriend from '../Images/add-user.png';

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightContainer">
        <div className="adsContainer">
          <img src={`${ads}`} className="adsImg" alt="pub" />
          <div>
            <p
              style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: 'start',
                marginLeft: '10px',
                fontSize: '12px',
                marginTop: '-16px',
              }}
            >
              Acheter un cours codemy
            </p>
          </div>
        </div>
        <div className="adsContainer">
          <img src={`${image3}`} className="adsImg" alt="pub" />
          <div>
            <p
              style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}
            >
              CodeDemy
            </p>
            <p
              style={{
                textAlign: 'start',
                marginLeft: '10px',
                fontSize: '12px',
                marginTop: '-16px',
              }}
            >
              Acheter un cours codemy
            </p>
          </div>
        </div>
      </div>
      <div className="rightContainer2">
        <h3 style={{ textAlign: 'start', marginLeft: '10px' }}>
          Suggestions pour toi
        </h3>
        <div style={{ marginTop: '-10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`${image2}`} className="profileImg" alt="amis" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                  Stuckens
                </p>
                <p
                  style={{
                    marginLeft: '10px',
                    textAlign: 'start',
                    marginTop: '-16px',
                    fontSize: '11px',
                    color: '#aaa',
                  }}
                >
                  Suggéré pour toi
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#aaa',
                padding: '10px',
                marginRight: 13,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              <img
                src={`${addFriend}`}
                className="addFriend"
                alt="ajouter ami"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '-10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`${image5}`} className="profileImg" alt="amis" />
              <div>
                <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                  Gregouse
                </p>
                <p
                  style={{
                    marginLeft: '10px',
                    textAlign: 'start',
                    marginTop: '-16px',
                    fontSize: '11px',
                    color: '#aaa',
                  }}
                >
                  est suivi par Kevin
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: '#aaa',
                padding: '10px',
                marginRight: 13,
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            >
              <img
                src={`${addFriend}`}
                className="addFriend"
                alt="ajouter ami"
              />
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image4}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                    Marine
                  </p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    est suivi par Kevin
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image6}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>Jojo</p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    est suivi par Kevin
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image1}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                    Messine
                  </p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    est suivi par Kevin
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image3}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                    Elon Musk
                  </p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    Suggéré pour toi
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image2}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                    Stuckens
                  </p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    Suggéré pour toi
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '-10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`${image2}`} className="profileImg" alt="amis" />
                <div>
                  <p style={{ marginLeft: '10px', textAlign: 'start' }}>
                    Stuckens
                  </p>
                  <p
                    style={{
                      marginLeft: '10px',
                      textAlign: 'start',
                      marginTop: '-16px',
                      fontSize: '11px',
                      color: '#aaa',
                    }}
                  >
                    Suggéré pour toi
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#aaa',
                  padding: '10px',
                  marginRight: 13,
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={`${addFriend}`}
                  className="addFriend"
                  alt="ajouter ami"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
