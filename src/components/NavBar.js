import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Navbar12.css';
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav 
          className="navbar fixed-top navbar-expand-lg navbar-dark" 
          style={{ backgroundColor: '#fff', borderBottom: "1px solid #000", padding: "20px 10px" }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link 
              className="navbar-brand" 
              to="/" 
              style={{ fontFamily: 'Playfair Display', color: '#000', fontSize: '24px',fontWeight:'bold' }}
            >
              NewsMonkey
            </Link>

            <button
              style={{ backgroundColor: "#000", border: "1px solid #fff" }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" style={{ color: "white" }}></span>
            </button>

            {/* Menu Items */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/" style={{ color: '#000', paddingLeft: '5px' }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business" style={{ color: '#000', paddingLeft: '5px' }}>Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment" style={{ color: '#000', paddingLeft: '5px' }}>Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general" style={{ color: '#000', paddingLeft: '5px' }}>General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health" style={{ color: '#000', paddingLeft: '5px' }}>Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science" style={{ color: '#000', paddingLeft: '5px' }}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports" style={{ color: '#000', paddingLeft: '5px' }}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology" style={{ color: '#000', paddingLeft: '5px' }}>Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
