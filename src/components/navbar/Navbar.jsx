import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="nav-main">
                <div className="nav-admin">
                    Vista Administrador
                </div>
                <div>
                    Complemento Comcait S.A
                </div>
                <div>
                    <ul className="nav-links">
                        <li className="item-navlinks">
                            <Link to="/">Salir</Link>
                        </li>
                    </ul>
                </div>
            
        </div>
    )

}
export default Navbar;