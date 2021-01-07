import React from "react"
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="main-header">
        <div className="container">
          <div className="logo">
            <NavLink to='/'><img src={logo} className="header-logo" alt="TennisApp logo" /></NavLink>
          </div>
          <nav className="navigation">
            <ul>
              <li><NavLink to='/characters'>Characters</NavLink></li>
              <li><NavLink to='/episodes'>Episodes</NavLink></li>
              
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header