import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"


const Navbar = () =>{
    return (
        <nav className='navbar'>
            <h1 className='logo'>COMPLEMENTO</h1>
            <ul className='nav-links'>
                <Link to="/" className="salir">
                   <li>SALIR</li>
                </Link>
            </ul>
        </nav>

    )   
}

export default Navbar;