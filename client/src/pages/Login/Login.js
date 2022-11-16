import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
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
          <p className="createAccountTxt">Connecte ton Compte</p>
          <input type="email" placeholder="E-mail" className="inputText" />
          <input type="password" placeholder="******" className="inputText" />
          <button className="btnForSignup">Connexion</button>
          <Link to={'/'}>
            <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
              Mot de passe oublié ?
            </p>
          </Link>
          <Link to={'/inscription'}>
            <p style={{ textAlign: 'start', marginLeft: '30.6%' }}>
              Pas encore de compte ?
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
