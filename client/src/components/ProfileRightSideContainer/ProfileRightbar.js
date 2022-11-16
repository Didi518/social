import React from 'react';
import './profileRightbar.css';
import image1 from '../Images/image1.jpg';
import image2 from '../Images/image2.jpg';
import image3 from '../Images/image3.jpg';
import image4 from '../Images/image4.jpg';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import addFriend from '../Images/add-user.png';

export default function ProfileRightbar() {
  return (
    <div className="profileRightbar">
      <div className="profileRightContainer">
        <h3>Abonnés</h3>
        <div>
          <div style={{ marginTop: '10px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 10,
                cursor: 'pointer',
              }}
            >
              <img src={image1} alt="ami" className="friendsImg" />
              <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                Stéphanie
              </p>
            </div>
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 10,
                  cursor: 'pointer',
                }}
              >
                <img src={image5} alt="ami" className="friendsImg" />
                <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                  Stéphanie
                </p>
              </div>
            </div>
            <div style={{ marginTop: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 10,
                  cursor: 'pointer',
                }}
              >
                <img src={image3} alt="ami" className="friendsImg" />
                <p style={{ textAlign: 'start', marginLeft: '10px' }}>
                  Stéphanie
                </p>
              </div>
            </div>
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
              <img src={`${image5}`} className="profileImg" alt="amis" />
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
