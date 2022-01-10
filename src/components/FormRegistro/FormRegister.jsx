import { useForm } from "../../hooks/useForm";
import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./FormRegister.scss";

const FormRegister = () => {
  // Expresiones regulares
  const erEmail =
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const erPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const [formValues, handleInputChange] = useForm({
    username: "",
    nombre: "",
    email: "",
    confirmacion_email: "",
    password: "",
    confirmacion_password: "",
  });

  const validarDatos = (e) => {
    if (e.target.value.length > 0) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
  };

  const validarEmail = (e) => {
    if (e.target.type === "email") {
      if (erEmail.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const validarPassword = (e) => {
    if (e.target.type === "password") {
      if (erPassword.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formValues.nombre ||
      !formValues.apellido ||
      !erEmail.test(formValues.email) ||
      !erPassword.test(formValues.password)
    ) {
      alert("Datos incompletos");
      return;
    }
  };

  return (
    <div className="complement-register-container">
      <div className="complement-login-header-tittle">
        <Label className="form-text3">
          COMPLEMENTO TIENDAS PROPIAS
        </Label>
        <div clasName="complement-login-header-tittle">
          <Label className="form-text3">
            COMCAIT S.A
          </Label>
        </div>
      </div>
      <Form className="container form-register" onSubmit={handleSubmit}>
        <div className="container-form-register">
          <Label className="form-text-title" htmlFor="username">
            Registro de Usuario
          </Label>
          <Row form>
            <Col lg={4} md={6} sm={12}>
              <FormGroup className="form-title2" row>
                <Label className="form-text5" htmlFor="username">
                  Nombre de usuario
                </Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    handleInputChange(e);
                    validarDatos(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={2} sm={1}>
              <FormGroup className="form-title2" row>
                <Label className="form-text5" htmlFor="nombre">
                  Nombre
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="off"
                  value={formValues.nombre}
                  required
                  onChange={(e) => {
                    handleInputChange(e);
                    validarDatos(e);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col lg={4} md={6} sm={12}>
              <FormGroup className="form-title2">
                <Label className="form-text5" htmlFor="email">
                  Correo
                </Label>
                <Input
                  type="email"
                  id="email"
                  autoComplete="off"
                  name="email"
                  value={formValues.email}
                  required
                  onChange={(e) => {
                    handleInputChange(e);
                    validarEmail(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col lg={4} md={6} sm={1}>
              <FormGroup className="form-title2">
                <Label className="form-text5" htmlFor="password">
                  Contrase&ntilde;a
                </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  required
                  onChange={(e) => {
                    handleInputChange(e);
                    validarPassword(e);
                  }}
                />
                <FormFeedback tooltip>
                  La contrase&ntilde;a debe tener m&iacute;nimo 6
                  c&aacute;racteres y m&aacute;ximo 16, adem&aacute;s, debe
                  poseer un n&uacute;mero.
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" size="lg">
            Crear Cuenta
          </Button>
          <Link to="/" className="form-info-redirect">
            ¿Tienes cuenta? <strong>Inicia sesión</strong>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default FormRegister;
