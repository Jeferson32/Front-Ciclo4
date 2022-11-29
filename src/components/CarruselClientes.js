import React from 'react'
import '../css/Carrusel_clientes.css'
import imgCarrusel from '../images/363d41.png'
import cliente1 from '../images/home1-7-280x320.jpg'
import cliente2 from '../images/home1-8-280x320.jpg'
import cliente3 from '../images/home1-9-280x320.jpg'



const CarruselClientes = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide clientes" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={imgCarrusel} className="d-block w-100 imgCarrusel" alt="..." />
                    <div>
                        <p className="nuestros-clientes">lo que dicen Nuestros Clientes</p>
                    </div>
                    <img className=" img-fluid imgRedonda" src={cliente1} alt="" />
                    <div>
                        <h4 className="nombre-cliente">Karen Sanders</h4>
                        <h5 className="nombre-pets">y Lex</h5>
                        <p className="opinion-cliente">Me gusta la amplia variedad de comida para gatos que ofrece esta tienda de mascotas.Siendo un cliente regular aquí por 3 años, estoy 100% satisfecho </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgCarrusel} className="d-block w-100 imgCarrusel" alt="..." />
                    <div>
                        <p className="nuestros-clientes">lo que dicen Nuestros Clientes</p>
                    </div>
                    <div><img className="img-fluid imgRedonda" src={cliente2} alt="" /></div>
                    <div>
                        <h4 className="nombre-cliente">Joanna Evans</h4>
                        <h5 className="nombre-pets">y Delta</h5>
                        <p className="opinion-cliente">Tienen la mejor selección de alimentos y suministros para gatos y perros.Recomiendo encarecidamente este sitio a todos los dueños de mascotas. </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={imgCarrusel} className="d-block w-100 imgCarrusel" alt="..." />
                    <div>
                        <p className="nuestros-clientes">lo que dicen Nuestros Clientes</p>
                    </div>
                    <div><img className="imgRedonda" src={cliente3} alt="" /></div>
                    <div>
                        <h4 className="nombre-cliente">Emily Peterson</h4>
                        <h5 className="nombre-pets">y Franco</h5>
                        <p className="opinion-cliente">El equipo de apoyo de esta tienda en línea me ayudó a elegir exactamente lo que mi perro necesita en este momento. ¡Gracias!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarruselClientes