import React from "react";
import '../css/nosotros.css'
import persona from '../images/persona.png'

const BannerNosotros = () => {
    return (
        <div>
            <header className="masthead text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img className="mb-5" src={persona} alt="..." />

                    <h1 className="masthead-heading text-uppercase mb-0">Sobre Nosotros</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><span className="material-icons">
                            pets
                        </span></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default BannerNosotros;