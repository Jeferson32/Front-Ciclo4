import React from 'react'
import { Link } from 'react-router-dom'
import '../css/banners_inicio.css'
import banner1 from '../images/banner_1accesorios.jpg'
import banner2 from '../images/banner_2perro.jpg'
import banner3 from '../images/banner_3.jpg'


const BannerInicio = () => {
    return (
        <div className="section_banners">
            
            <div className="container">
                <div className="row ">
                    <div className="col-sm-8 banner_66_2">
                        <div className="banner_item ">
                            <img
                                src={banner1}
                                alt="" />
                            <div className="banner_caption">
                                <div>
                                    <h4>A partir de $ 19.99</h4>
                                    <h2>Accesorios</h2>
                                    <Link to={'tienda'} className="btn btn-outline-success">Comprar</Link>
                                </div>
                            </div>
                        </div>

                        <div className="second_row">
                            <div className="banner_item  ">
                                <img
                                    src={banner2}
                                    alt="" />
                                <div className="banner_caption">
                                    <div>
                                        <h4>A partir de $ 19.99</h4>
                                        <h2>Juguetes para tus mascota</h2>
                                        <Link to={'tienda'} className="btn btn-primary">Comprar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="col-sm-4 banner_33">
                        <div className="banner_item ">
                            <img 
                                src={banner3}
                                alt="" />
                            <div className="banner_caption style_telling">
                                <div className="caption_text ">
                                    <h4>A partir de $ 19.99</h4>
                                    <h2>Alimentos</h2>
                                    <Link to={'tienda'} className="btn btn-primary">Comprar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerInicio