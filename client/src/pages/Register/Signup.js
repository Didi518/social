import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  return (
    <div className="mainContainerForSignup">
      <div className="submainContainer">
        <div style={{ flex: 1, marginLeft: 150, marginBottom: '170px' }}>
          <p className="logoText">
            Soc<span className="part">ial</span>
          </p>
          <p className="introText">
            Connecte toi à ta <span className="part">famille et tes amis</span>
          </p>
        </div>
        <div style={{ flex: 3 }}>
          <p className="createAccountTxt">Créé ton Compte</p>
          <input type="text" placeholder="Pseudonyme" className="inputText" />
          <input type="text" placeholder="Téléphone" className="inputText" />
          <input type="email" placeholder="E-mail" className="inputText" />
          <input type="password" placeholder="******" className="inputText" />
          <button className="btnForSignup">Inscription</button>
          <Link to={'/connexion'}>
            <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
              Déjà un compte ?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
