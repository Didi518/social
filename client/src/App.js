import './App.css';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Register/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
