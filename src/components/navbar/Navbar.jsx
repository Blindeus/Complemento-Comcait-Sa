import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../img/logo-ez-post.png'

function Navbar() {
    return (
        <div className="nav-main">
            
                <div className="nav-logo">
                    <Link to= "/"><img src={logo} className='logo-nav' alt="Ez post" /></Link>
                </div>
                <div>
                    <ul className="nav-links">
                        <li className="item-navlinks">
                            <Link to="/servicios">Servicios</Link>
                        </li>
                        <li className="item-navlinks">
                            <Link to="/sucursales">Sucursales</Link>
                        </li>
                        <li className="item-navlinks">
                            <Link to="/quienes-Somos">¿Qui&eacute;nes Somos?</Link>
                        </li>
                        <li className="item-navlinks">
                            <Link to="/Login">Iniciar sesi&oacute;n</Link>
                        </li>
                    </ul>
                </div>
            
        </div>
    )

}
export default Navbar;