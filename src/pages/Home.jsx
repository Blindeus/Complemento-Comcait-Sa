import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Boton from '../components/Boton/Boton'



export default function Home() {
    return (
        <div className="box-menu">
            <div className="box-image">
                <div>
                    <ul className="box-links">
                        <li className="item-boxlinks">
                            <Link to="/cotizar-envio"> 
                                <Boton info="Cotizar env&iacute;o" icono="fas fa-search-dollar fa-2x"/> 
                            </Link>
                        </li>
                        <li className="item-boxlinks">
                            <Link to="/realizar-seguimiento">
                                <Boton info="Realizar seguimiento" icono="fas fa-map-marker-alt fa-2x"/>
                            </Link>
                        </li>
                        <li className="item-boxlinks">
                            <Link to="/enviar-paquete">
                                <Boton info="Enviar paquete" icono="fas fa-paper-plane fa-2x"/>
                            </Link>
                        </li>
                        <li className="item-boxlinks">
                            <Link to="/Solicitar-retiro">
                                <Boton info="Solicitar retiro" icono="far fa-calendar-minus fa-2x"/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
         <div className="info-container"> 
            <div className='title-info'> 
             <h1>Ez post tu mejor aliado realizando envíos!</h1>
            </div>
            <div className='info-box'>
                <h1>Envíos nacionales fácilmente</h1>
                <p>Te ofrecemos envíos dentro de las 16 regiones de Chile puerta a puerta para <br /> 
                cubrir tus necesidades ya sea vía aérea o terrestre.</p>
                <h1>Opciones de entregas flexibles</h1>
                <p>Tus clientes se beneficiarán de nuestros servicios de entrega solicitada, <br />
                 lo que les permitirá decidir cuando y donde se entregará su paquete.</p>
                <h1>Retiramos tu paquete o documento</h1>
                <p>En Ez post te damos la opción de solicitar un retiro vía web <br />
                 y nos encargamos de ir a buscar tu paquete o documento.</p>
            </div>

         </div>   
        </div>
        
    )
}

