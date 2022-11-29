import React from "react";
import CardsProductos from "./CardsProductos";
import producto1 from '../images/perro-comida-ringo-croquetas-adulto.jpg'
import producto2 from '../images/accesorio-collar-pañoleta.jpg'
import producto3 from '../images/gato-accesorio-arenero-plastico-con-pala.jpg'
import producto4 from '../images/gato-accesorio-juguete-catnip.jpg'
import producto5 from '../images/perro-accesorio-plato-plegable.jpg'
import producto6 from '../images/1411004.jpg'
import medalla from '../images/medalla.png'
import perro from '../images/dogs.png'
import gato from '../images/post-1-570x461-removebg-preview.png'



const CategoriasTienda = () => {
    return (
        <div className="container">
            <div>
                <img className="img-medalla" src={medalla} alt="" ></img>
                <img src={perro} className=" img-dog" alt="..."></img>
            </div>
            <div className="row row-50">
                <div className="col-lg-4 col-xl-3">
                    <div className="aside row row-30 row-md-50 justify-content-md-between">
                        <div className="aside-item col-12">
                            <h6 className="aside-title text-center">FILTRAR POR PRECIO</h6>
                            <hr />
                        </div>
                        <div>
                            <input type="range" className="rango" id="customRange1" />
                            <button className="btn btn-tienda">Flitrar</button>
                        </div>
                        <div className="aside-item col-sm-6 col-md-5 col-lg-12">
                            <h6 className="aside-title text-center">Categorías</h6>
                            <hr />
                            <ul className="list-shop-filter">
                                <li>
                                    <label className="checkbox-inline">
                                        <input className="form-check-input me-1 form-check-input is-valid" type="checkbox"
                                            value="" id="firstCheckbox" /><span className="checkbox-custom-dummy"></span>Alimento
                                    </label><span className="list-shop-filter-number">(10)</span>
                                </li>
                                <li>
                                    <label className="checkbox-inline">
                                        <input className="form-check-input me-1 form-check-input is-valid " type="checkbox"
                                            value="" id="firstCheckbox" /><span
                                                className="checkbox-custom-dummy"></span>Accesorios
                                    </label><span className="list-shop-filter-number">(10)</span>
                                </li>
                                <li>
                                    <label className="checkbox-inline">
                                        <input className="form-check-input me-1 form-check-input is-valid" type="checkbox"
                                            value="" id="firstCheckbox" /><span className="checkbox-custom-dummy"></span>Jugutes
                                    </label><span className="list-shop-filter-number">(10)</span>
                                </li>
                            </ul>

                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-tienda type= submit"><span className="material-icons">
                                    search
                                </span></button>
                            </form>
                        </div>
                        <div className="aside-item col-sm-6 col-lg-12">
                            <h6 className="aside-title text-center">Productos Destacados</h6>
                            <hr />
                            <div className="row row-10 row-lg-20 gutters-10">
                                <div className="col-4 col-sm-6 col-md-12">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto1} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Ringo Croquetas - 30kg</p>
                                                <p className="product-minimal-price">$115.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-4 col-sm-6 col-md-12 mt-5">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto2} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Collar Pañoleta</p>
                                                <p className="product-minimal-price">$22.500</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-4 col-sm-6 col-md-12 mt-5">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto3} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Arenero Plastico Azul
                                                </p>
                                                <p className="product-minimal-price">$90.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-4 col-sm-6 col-md-12 mt-5 ">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto4} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Juguete Catnip
                                                </p>
                                                <p className="product-minimal-price">$12.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-4 col-sm-6 col-md-12 mt-5">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto5} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Plato Plegable
                                                </p>
                                                <p className="product-minimal-price">$20.000</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-4 col-sm-6 col-md-12 mt-5">

                                    <article className="product-minimal">
                                        <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                                            <div className="unit-left"><a className="product-minimal-figure"
                                                href="single-product.html"><img
                                                    src={producto6} alt="" width="106"
                                                    height="104" /></a></div>
                                            <div className="unit-body">
                                                <p className="product-minimal-title">Alimento Seco Para Gato
                                                </p>
                                                <p className="product-minimal-price">$105.315 - 5Lb</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <img src={gato} alt="" className="img-cat"></img>
                        </div>
                    </div>
                </div>
                <CardsProductos></CardsProductos>
            </div>
        </div>
    );
};

export default CategoriasTienda;