import React from 'react'
import slider1 from '../images/slider-1-slide-1-1920x850.jpg'
import slider2 from '../images/slider-2-slide-1-1920x850.jpg'
import slider3 from '../images/slider-1-slide-2-1920x850.jpg'
import '../css/carrusel_inicio.css'
import { Link } from 'react-router-dom'



const CarruselInicio = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carrusel-inicio" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titulo'>Haz a tus mascotas felices</h5>
                        <Link to={'tienda'} className="btn btn-Carrusel"> Comprar Ahora</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titulo2'>Los mejores accesorios y jueguetes para tus mascotas</h5>
                        <Link to={'tienda'} className="btn btn-Carrusel"> Comprar Ahora</Link>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className='titulo3'>¡TODO PARA DAR LA BIENVENIDA a nuestro cachorro a CASA!</h5>
                        <Link to={'tienda'} className="btn btn-Carrusel"> Comprar Ahora</Link>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarruselInicio