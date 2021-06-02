import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/Formulario/FormInput';
import Logo from '../img/logo-ez-post.png';
import "./Login.css";



function Login (){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmitClick = (event) =>{
        console.log ("Enviando" , {email, password});
    }
    return (
    <div className = "mainlogin">
        <div className="logo-container">
            <img src={Logo} alt="Ez-post-logo" className="logo-login"/>
        </div>
        <div className = "login">
            <h3>Inicio sesión</h3>
            <form onSubmit={handleSubmitClick}>
                <FormInput label="Email" placeholder="Ingrese su Email" type="email" 
                onChange={(event) => setEmail(event.target.value)}/>
                <FormInput label="Contraseña" placeholder="Ingrese su contraseña" type="password" 
                onChange={(event) => setPassword(event.target.value)}/>
                <div className= "posicion">         
                    <input type="submit" value="Iniciar sesión" className= "boton" onClick={handleSubmitClick} />
                    <Link to="/Register" ><input type="submit" value="Registrarse" className= "boton" /></Link>
                </div> 
                <div className="olvido">¿Olvidaste tu contraseña?</div>
            </form>
        </div>
    </div>

  
  
  
      
    );

}

export default Login;