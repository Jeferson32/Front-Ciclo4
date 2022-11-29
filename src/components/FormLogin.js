import React, { useState } from 'react'
import banner from '../images/bg-image-5.jpg';
import { Col, Row } from 'react-bootstrap';
import '../css/bannerlogin.css'
import { Link, useNavigate } from 'react-router-dom';
import dog from '../images/dog3-.png'
import cat from '../images/post-1-570x461-removebg-preview.png'
import axios from 'axios'
import swal from 'sweetalert2'


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const navegar = useNavigate();

    function loginValidacion(event) {
        event.preventDefault();
        axios.get(`/usuarios/login/${clave}`)
            .then(res => {
                if (res.data === 'Contraseña Incorrecta') {
                    swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: res.data,
                    })
                } else {
                    navegar('/home')
                }
            })
            .then(err => { console.log(err) })
    }
    return (
        <div>
            <div>
                <img src={banner} className="img-banner" alt=""></img>
            </div>
            <div className="container form-login mt-5">
                <h2 className="titulo-contacto mb-5">Bienvenido</h2>
                <Row>
                    <Col sm="12" xs="12" md={{ span: 4, offset: 4 }}
                        lg={{ span: 4, offset: 4 }}
                        xl={{ span: 4, offset: 4 }}>
                        <form onSubmit={loginValidacion}>
                            <div class="mb-5">
                                <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
                                <input type="email" class="form-control form-control-lg " required={true} value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                                <input type="password" class="form-control  form-control-lg" required={true} value={clave}
                                    onChange={(e) => {
                                        setClave(e.target.value);
                                    }} />
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-success btn-lg mt-5 mb-5">Iniciar sesión</button>
                            </div>
                            <h5>¿No tienes una cuenta?<Link to="/registro1" class="registrarme">&nbsp; &nbsp;Regístrate aquí</Link></h5>
                        </form>
                    </Col>
                </Row>
            </div>
            <div><img src={dog} class="dog" alt="..."></img></div>
            <div><img src={cat} class="cat" alt="..."></img></div>
        </div>
    )
}

export default FormLogin;