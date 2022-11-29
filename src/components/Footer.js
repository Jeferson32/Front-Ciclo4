import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div>
            <footer className="footer-10">
                <div className="container">
                    <div className="row mb-5 pb-3 no-gutters">
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-1 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span class="material-icons">
                                            phone
                                        </span>
                                    </div>
                                    <div className="text">
                                        <span>(+00) 1234 5678</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-2 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span class="material-icons">
                                            mail
                                        </span>
                                    </div>
                                    <div className="text">
                                        <span>info@email.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-4 d-flex">
                            <div className="con con-2 w-100 py-5">
                                <div className="con-info w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span class="material-icons">
                                            location_on
                                        </span>
                                    </div>
                                    <div className="text">
                                        <span>Calle 56 #67</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Acerca de</h2>
                                    <h2 className="footer-heading">
                                        Nuestra tienda de mascotas radica en brindar atención de calidad a las mascotas.
                                        Queremos que nuestros clientes y sus mascotas reciban el mejor servicio y productos, por eso trabajamos solo con fabricantes probados y respetados.
                                    </h2>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Links</h2>
                                    <ul className="list-unstyled">
                                        <li><Link to={'/'}>Inicio</Link></li>
                                        <li><Link to={'tienda'}>Tienda</Link></li>
                                        <li><Link to={'contacto'}>Contáctenos</Link></li>
                                        <li><Link to={'nosotros'}>Nosotros</Link></li>

                                    </ul>
                                </div>
                                <div className="col-md-4 mb-md-0 mb-4">
                                    <h2 className="footer-heading">Horarios</h2>
                                    <h2 className='footer-heading'>Lunes a Viernes
                                        <h6>08:00am-7:30pm</h6></h2>08:00am–7:30pm
                                    <h2 className='footer-heading'>Sabados,Domingos
                                        <h6>08:00am–4:00pm</h6></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mb-md-0 mb-4">
                            <h2 className="footer-heading">SUSCRÍBETE</h2>
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Ingresa Tu Email" />
                                    <button type="submit" className="form-control submit rounded-right">Enviar</button>
                                </div>
                                <h6 className="footer-heading">Recibe noticias y promociones al instante.</h6>
                            </form>
                        </div>
                    </div>
                    <div className="row mt-5 pt-4 border-top">
                        <div className="text-center">
                            <h2 className="footer-heading">
                                + Cotas Pet Shop
                                Copyright &copy;
                            </h2>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer