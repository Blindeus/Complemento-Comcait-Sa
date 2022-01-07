import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from '../../hooks/useForm';
import './FormLogin.scss';

const FormLogin = () => {
  const [formLogin, handleInputChange] = useForm({
    username: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formLogin.username || !formLogin.password) {
      alert('Datos incompletos');
      return;
    }
  };

  return (
    <div className="complement-login-container">
      <div className="complement-login-header-tittle">
        <Label className="form-text3" htmlFor="tittle">
          COMPLEMENTO TIENDAS PROPIAS
        </Label>
        <div className="complement-login-header-tittle">
          <Label className="form-text3" htmlFor="tittle">
            COMCAIT S.A
          </Label>
        </div>
      </div>
      <Form className="container" id="form-login" onSubmit={handleLogin}>
        <div className="login-form-container">
          <Label className="form-text2" htmlFor="username">
            Iniciar Sesión
          </Label>
          <FormGroup className="form-text-login">
            <Label className="form-text1" htmlFor="username">
              Nombre de usuario
            </Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formLogin.username}
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup className="form-text-login">
            <Label className="form-text1" htmlFor="password">
              Contrase&ntilde;a
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formLogin.password}
              required
              onChange={handleInputChange}
            />
          </FormGroup>
          <Link to="/recovery-password" className="olvido-password">
            <strong>¿Olvidaste tu contrase&ntilde;a?</strong>
          </Link>
          <Button type="submit" size="lg">
            Ingresar
          </Button>
          <Link to="/register" className="crear-cuenta-login">
            ¿No tienes cuenta? <strong>¡Crea la tuya ahora!</strong>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default FormLogin;
