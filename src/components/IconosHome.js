import React from 'react'
import '../css/inicio_iconos.css'
import alimento from '../images/alimentos-para-mascotas.png'
import accesorios from '../images/cama-para-mascotas.png'
import juegutes from '../images/juguete-para-mascotas.png'
import alimento2 from '../images/alimentos-para-mascotas (1).png'
import accesorios2 from '../images/collares.png'
import juguetes2 from '../images/juguete-de-gato.png'
import { Link } from 'react-router-dom'




const IconosHome = () => {
    return (

        <div id="shopify-section-1596008730980" className="shopify-section section section_homepage section_logo-list">
            <div className="full_width_container">
                <div className="row">
                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">
                                    <img className="img-txt-productos" src={alimento} alt="" />
                                </div>
                                <p>Alimento</p>
                            </Link>
                        </div>
                    </div>



                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">

                                    <img src={accesorios} alt="" className='img-txt-productos' />

                                </div>
                                <p>Accesorios</p>
                            </Link>
                        </div>
                    </div>



                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">
                                    <img src={juegutes} alt="" className='img-txt-productos' />
                                </div>
                                <p>Juegutes</p>
                            </Link>
                        </div>
                    </div>



                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">
                                    <img src={alimento2} alt="" className='img-txt-productos' />
                                </div>
                                <p>Alimento</p>
                            </Link>
                        </div>
                    </div>



                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">
                                    <img src={accesorios2} alt="" className='img-txt-productos' />
                                </div>
                                <p>Accesorios</p>
                            </Link>
                        </div>
                    </div>



                    <div className="col-xs-4 col-sm-2 px-md-0">
                        <div className="logo_item item_icon ">
                            <Link to={'tienda'} className="logo-bar__link logo_wrap">
                                <div className="icon">

                                    <img src={juguetes2} alt="" className='img-txt-productos' />
                                </div>
                                <p>Juegutes</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconosHome