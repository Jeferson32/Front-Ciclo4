import React from "react";
import { Link } from "react-router-dom";
import '../css/nosotros.css'


function NosotrosTienda(props) {
    return (

        <section class="page-section text-white mb-0" id="about">
            <div class="container">

                <h2 class="page-section-heading text-center text-uppercase text-white">Pet Shop</h2>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><span class="material-icons">
                        pets
                    </span></div>
                    <div class="divider-custom-line"></div>
                </div>

                <div class="row">
                    <div class="col-lg-4 ms-auto text-center">
                        <p class="lead">La misión de nuestra tienda de mascotas radica en brindar atención de calidad a las mascotas.
                            Queremos que nuestros clientes y sus mascotas reciban el mejor servicio y productos, por eso trabajamos solo con fabricantes probados y respetados.</p>
                    </div>
                    <div class="col-lg-4 me-auto text-center">
                        <p class="lead">Con el objetivo de ser el lugar líder para el cuidado de mascotas y compras.
                            Nuestra visión en Puffles es convertirnos en la tienda en línea número 1 para mascotas, así como el espacio donde los propietarios pueden obtener cualquier tipo de servicio relacionado con mascotas a un precio asequible</p>
                    </div>
                </div>

                <div class="text-center">
                    <Link class="btn btn-outline-light" to={'/tienda'}>
                        Tienda
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default NosotrosTienda;