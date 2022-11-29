import React from "react";
import { useState } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/registro.css";
import NavbarLogin from '../components/NavbarLogin'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const Registro1 = () => {
  //Hooks
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [celular, setCelular] = useState('');
  const [clave, setClave] = useState('');
  const navegar = useNavigate()
  function nuevoUsuario(event) {
    event.preventDefault();
    var usuario = {
      nombres: nombres,
      apellidos: apellidos,
      email: email,
      direccion: direccion,
      celular: celular,
      clave: clave
    };
    console.log(usuario)
    axios.post('/usuarios//crearUsuario', usuario)
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          text: res.data,
        })
        navegar('/')
      })
      .then(err => { console.log(err) })
  }
  return (
    <div id="slider">
      <NavbarLogin></NavbarLogin>
      <div>
        <section className="py-5 text-center container">
          <div className="row py-lg-10 form-registro">
            <div className="col-md-12 "></div>
            <div id="formReg">
              <h1>Registro de usuarios</h1>
              <Form className="contenido col-md-12" onSubmit={nuevoUsuario}>
                <div id="izq" className="caja col-md-4">
                  <Form.Group className="">
                    <Form.Group className="mb-3" controlId="formBasicNames">
                      <Form.Label for="name">Nombres</Form.Label>
                      <Form.Control
                        type="text"
                        id="name"
                        placeholder="Ingresa tus nombres "
                        value={nombres}
                        required={true}
                        onChange={(e) => {
                          setNombres(e.target.value);
                        }}
                      />
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Direccion de residencia</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Direccion de residencia"
                      value={direccion}
                      required={true}
                      onChange={(e) => {
                        setDireccion(e.target.value);
                      }}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email " required={true} value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }} />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </div>

                <div id="der" className="caja col-md-4">
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tus apellidos "
                      value={apellidos}
                      required={true}
                      onChange={(e) => {
                        setApellidos(e.target.value);
                      }}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu numero de cel"
                      value={celular}
                      required={true}
                      onChange={(e) => {
                        setCelular(e.target.value);
                      }}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" required={true} value={clave}
                      onChange={(e) => {
                        setClave(e.target.value);
                      }} />
                  </Form.Group>
                </div>


                <div className="btn1 col-mb-12">
                  <Button align="center" className="col-md-2" id="button1" variant="success" type="submit">
                    Registrar
                  </Button>
                </div>

              </Form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registro1;
