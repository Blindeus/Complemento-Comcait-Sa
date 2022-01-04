import React,  { useState } from 'react';
import "./Login.css"
import ComplementTittle from '../components/TittleApp/ComplementTittle'
import ComplementLabel from '../components/Label/ComplementLabel'
import ComplementInput from '../components/Input/ComplementInput';
import { Link } from 'react-router-dom';


const Login = ()=>{

    const [ user, setUser] = useState('');
    const [ password, setPassword] = useState('');
    const [ passwordError, setPasswordError] = useState (false)
    const [ isLogin, setIsLogin] = useState (false)
    const [ hasError, setHasError] = useState (false)

    function handleChange (name, value){
        if (name === 'usuario') {
            setUser(value)
        }else { 
            if (value.length <6){
                setPasswordError(true)
            }else {
                setPasswordError(false);
                setPassword(value)
            }
        }
    }

    function ifmatch(param){

        if(param.user >0 && param.password.length > 0){
            if(param.user === 'blind' && param.password === 'hola123'){
                const { user, password } = param;
                let ac = { user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account)
                setIsLogin(true);
            }else {
                setIsLogin(false);
                setHasError(true)
            }
        }else {
            setIsLogin(false);
            setHasError(true)
        }
    }

    function handleSubmit(){
        let account = {user, password}
        if (account)
          ifmatch(account);
    }

    console.log ('usuario', user)
    console.log ('password', password)

    return (
    <div className = "complement-login-container">
    <div className='complement-login-content'>
    <ComplementTittle text='Complemento Retail'/>
     <ComplementTittle text='Comcait S.A'/>
     { hasError &&
     <label className='complement-label-error'>
        contraseña o usuario incorrectos
     </label>
    }   
     <ComplementLabel text='Nombre de Usuario' />
     <ComplementInput
        attribute={{
         id: 'usuario',
         name: 'usuario',
         type: 'text',
         placeholder: 'usuario'
     }}
     handleChange= {handleChange}
     />
     <ComplementLabel text= 'Contrase&ntilde;a' />
     <ComplementInput
        attribute={{
        id: 'contraseña',
        name: 'contraseña',
        type: 'password',
        placeholder: 'Contraseña'
          }}
     handleChange= {handleChange}
     param={passwordError}
     />
      <Link to="/register" className="crear-cuenta-login">
          ¿No tienes cuenta? <strong>¡Crea la tuya ahora!</strong>
        </Link>
        </div>
            <div>
                <button onClick={handleSubmit} className='submit'>
                    Ingresar
                </button>
            </div>
    </div>
      
    );
}
export default Login;

