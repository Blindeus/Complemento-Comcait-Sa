import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import logo from '../../img/logo-ez-post.png'



function Footer() {
    return (
        <div className="Contenedor-main">
            <div className="subcontain1">
                <div className="logo">
                    <Link to= "/"><img src={logo} className='logo-footer' alt="Ez post" /></Link>
                    </div>
                <div className="info-ezpost">
                    <h3>Ez post central: La moneda #2021</h3>
                    <p>900 400 9000</p>
                </div>
            </div>
            <div className="subcontain2">
                <div className="subcontain3">
                      <h3>Herramientas</h3>
                    <ul className="foteer-links">
                        <li className="items-links"> 
                            <Link to="/cotizar-envio">cotizar envio</Link>
                        </li> 
                        <li className="items-links">
                            <Link to="/seguimiento">seguimiento</Link>
                        </li> 
                        <li className="items-links">
                            <Link to="/sucursales">sucursales</Link>
                         </li> 
                        <li className="items-links">
                            <Link to="/solicitar-retiro">solicitar retiro</Link>
                        </li> 
                    </ul>
                </div>
                <div className="subcontain3">
                        <h3>Centro de ayuda</h3>
                    <ul className="footer-links">
                        <li className="items-links">
                            <Link to="/formulario">formulario</Link>
                        </li> 
                        <li className="items-links">
                            <Link to="/politicas-privacidad">politicas privacidad</Link>
                        </li>
                        <li className="items-links">
                            <Link to="/preguntas-frecuentas">preguntas frecuentes</Link>
                        </li> 
                    </ul>
                </div>
                <div className="subcontain3">
                     <h3>Centro coorporativo</h3>
                    <ul className="footer-links"> 
                        <li className="items-links">
                            <Link to="/proveedores">proveedores</Link>
                        </li>
                        <li className="items-links">
                            <Link to="/registro-trasnporsitas">registro de transportistas</Link>
                        </li> 
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;