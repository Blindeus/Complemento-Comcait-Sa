import React from 'react'
import './Boton.css'
export default function Boton(props) {
    return (
        <div className="button">   
            <div className="icon-button">
                <i className={props.icono}></i>
            </div>
            <div className="button-info">
               <h1>{props.info}</h1>
            </div>
        </div>  
    )     
}
