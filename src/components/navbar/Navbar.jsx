import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

export default function Navbar() {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="complement-navbar-items">
      <div className="complement-navbar-tittle">COMPLEMENTO</div>
      <ul className="complement-navbar-links">
        <li className="complement-navbar-items">
          <Link exacth to="/" className="navbar-salir">
            Salir
          </Link>
        </li>
      </ul>
    </nav>
  );
}
