import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import './Navbar.scss';

const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const resetNavLink = () => setNavLinkOpen(false);
  const handleDropdown = () => setDropdownOpen(!dropdownOpen);
 
  const btnNonStyle = {
    outline: 'none',
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  };

  return (
    <nav className="nav-principal">
      <h1 className="nav-logo">COMPLEMENTO</h1>
      <ul className={navLinkOpen ? 'nav-link atctive' : 'nav-links'}></ul>
      <li className="item-nav-links">
        <NavLink exact to="/" onClick={resetNavLink}>
          Salir
        </NavLink>
      </li>
    
    </nav>
  );
};

export default Navbar;
