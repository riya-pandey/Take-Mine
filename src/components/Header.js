// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src="take.png" alt="Logo" className="logo-image" />
          </Link>
        </div>

        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/search-items" className="nav-link">Search Items</Link>
            </li>
            <li className="nav-item">
              <Link to="/availableresource" className="nav-link">Available Resources</Link>
            </li>
            <li className="nav-item">
              <Link to="/tutors" className="nav-link">Tutors for You</Link>
            </li>
            
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link profile-link">
                    <span className="profile-icon">👤</span>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="logout-button">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link login-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="signup-button">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;