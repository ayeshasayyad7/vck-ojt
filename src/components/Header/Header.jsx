import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    {/* <div className="college-name"> */}
   <h2 >Vivekanand College</h2> 
    {/* </div> */}
    <nav className="navbar desktop-nav">
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About</Link>
      <Link className="nav-item" to="/courses">Courses</Link>
      <Link className="nav-item" to="/contact">Contact</Link>
      <Link className="nav-item btn primary-btn" to="/admissions">Apply Now!</Link>
    </nav>
  </header>
);

export default Header;