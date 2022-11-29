import React from 'react'
import '../css/carrusel_productos.css'
import perro from '../images/perro.png'
import gato from '../images/feliz.png'
import producto from '../images/product-04-200x200.png'
import { Link } from 'react-router-dom'


const CarruselProductos = () => {

    return (
        <div className="carrusel-productos">
            <div className="container">
                <div>
                    <h2 className="text-productos"><img className="img-txt-productos" src={perro} alt="" /> Productos
                        <img className="img-txt-productos" src={gato} alt="" />
                    </h2>
                </div>
                <div id="carrusel" className="carousel" data-bs-ride="carousel">
                    <div className="carousel-inner productos">
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento </h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento </h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento Gato</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento Gato</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento Gato</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active items">
                            <div className="card">
                                <Link to={'tienda'}><img src={producto} className="card-img" alt="..." /></Link>
                                <div className="card-body">
                                    <span className="material-icons add_shopping_cart">
                                        add_shopping_cart
                                    </span>
                                    <h5 className="card-title text-center cambioColor">Alimento Gato</h5>
                                    <h2 className="fw-bold text-center product-precio">$ 23.000<span
                                        className="material-icons icon-precio">
                                        sell
                                    </span></h2>
                                    <ul className="list-estrellas">
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons ">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>
                                        <li className="estrellas">
                                            <span className="material-icons">
                                                star
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev btn-carrusel-prev " type="button" data-bs-target="#carrusel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next  btn-carrusel " type="button" data-bs-target="#carrusel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarruselProductos