import React from "react";
import producto1 from '../images/1411004.jpg'
import producto2 from '../images/evolve-classic-chicken-dog-4lb.png'
import producto3 from '../images/cama-para-mascotas-guamba-donut-azul.png'
import producto4 from '../images/perro-accesorio-lazo-ahogo-cuerda-gruesa.jpg'
import producto5 from '../images/perro-accesorio-hueso-macizo-caucho.jpg'



const CardsProductos = () => {
    return (
        <div className="col-lg-8 col-xl-9">
            <div className="row row-30 row-md-50 row-lg-60">
                <div className="col-12">
                    <article className="product-modern text-center text-sm-left">
                        <div className="unit unit-spacing-0 flex-column flex-sm-row">
                            <div className="unit-left">
                                <img src={producto1} alt="" className="producto-img" /></div>
                            <div className="unit-body">
                                <div className="product-modern-body">
                                    <h4 className="product-modern-title">Alimento Seco Para Gato Nulo 5Lb</h4>
                                    <div className="product-price-wrap">
                                        <div className="product-price">$105.315 - 5Lb</div>
                                    </div>
                                    <p className="product-modern-text m-5">Nuestra receta libre de granos es rica en nutrientes esenciales provenientes de ingredientes saludables como pavo, bacalao y aceite de salmón, para contribuir con un pelaje hermoso y brillante.</p>
                                    <button className="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span className="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div className="col-12">
                    <article className="product-modern text-center text-sm-left">
                        <div className="unit unit-spacing-0 flex-column flex-sm-row">
                            <div className="unit-left">
                                <img src={producto2} alt="" className="producto-img" /></div>
                            <div className="unit-body">
                                <div className="product-modern-body">
                                    <h4 className="product-modern-title">Alimento Para Perro Evolve Classic Adulto Pollo - 4 Lb</h4>
                                    <div className="product-price-wrap">
                                        <div className="product-price">$55.900 4Lb</div>
                                    </div>
                                    <p className="product-modern-text m-5">Tiene todos los nutrientes necesarios para una feliz y saludable vida. Evolve es rico en nutrientes y contiene proteínas de alta calidad, carbohidratos complejos, vegetales, minerales, vitaminas, aceites y grasas.</p>
                                    <button className="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span className="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div className="col-12">
                    <article className="product-modern text-center text-sm-left">
                        <div className="unit unit-spacing-0 flex-column flex-sm-row">
                            <div className="unit-left">
                                <img src={producto3} alt="" className="producto-img" /></div>
                            <div className="unit-body">
                                <div className="product-modern-body">
                                    <h4 className="product-modern-title">Cama Para Mascotas Guamba Donut Azul - Pequeña</h4>
                                    <div className="product-price-wrap">
                                        <div className="product-price">$93.005</div>
                                    </div>
                                    <p className="product-modern-text m-5">Elaborada en tela peluche y relleno de fibra siliconada que nunca se deforma.Elaborada en tela peluche y relleno de fibra siliconada que nunca se deforma.</p>
                                    <button className="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span className="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>


                <div className="col-12">
                    <article className="product-modern text-center text-sm-left">
                        <div className="unit unit-spacing-0 flex-column flex-sm-row">
                            <div className="unit-left">
                                <img src={producto4} alt="" className="producto-img" /></div>
                            <div className="unit-body">
                                <div className="product-modern-body">
                                    <h4 className="product-modern-title">Lazo Ahogo Cuerda Gruesa</h4>
                                    <div className="product-price-wrap">
                                        <div className="product-price">$27.115</div>
                                    </div>
                                    <p className="product-modern-text m-5">Ya sea que su perro vaya a buscar, agarre y corra o se quede a su lado con la mirada perdida. Un aro con cuerda es un complemento clave para cualquiera de las aventuras de su perro.</p>
                                    <button className="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span className="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>

                <div className="col-12">
                    <article className="product-modern text-center text-sm-left">
                        <div className="unit unit-spacing-0 flex-column flex-sm-row">
                            <div className="unit-left">
                                <img src={producto5} alt="" className="producto-img" /></div>
                            <div className="unit-body">
                                <div className="product-modern-body">
                                    <h4 className="product-modern-title">Hueso Macizo Juguete De Caucho</h4>
                                    <div className="product-price-wrap">
                                        <div className="product-price">$20.400</div>
                                    </div>
                                    <p className="product-modern-text m-5">Dale un hueso a tu perro. Un hueso de caucho natural. Este resistente juguete para masticar está hecho de goma gruesa y elástica y es adecuado para los masticadores más pesados.</p>
                                    <button className="btn btn-carrito">Añadir Al Carrito</button>
                                </div>
                            </div>
                        </div><span className="product-badge product-badge-sale">Sale</span>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default CardsProductos;