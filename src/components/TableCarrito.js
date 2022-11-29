import React from 'react'
import '../css/tableCarrito.css'
import gato from '../images/home2-1-533x482.png'
import producto1 from '../images/1411004.jpg'
import producto2 from '../images/evolve-classic-chicken-dog-4lb.png'
import producto3 from '../images/cama-para-mascotas-guamba-donut-azul.png'
import producto4 from '../images/perro-accesorio-lazo-ahogo-cuerda-gruesa.jpg'




const TableCarrito = () => {
    return (
        <div>
            <img src={gato} class="rounded float-start img-gato" alt="..."></img>
            <div class="container tabla-carrito">
                <div>
                    <table class="table tabla-carrito table-hover">
                        <thead class="thead-primary">
                            <tr>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                                <th>Producto</th>
                                <th>Marca</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input class="form-check-input is-valid" type="checkbox" value="" />
                                </td>
                                <td>
                                    <img class="img-producto" src={producto1} alt='a'></img>
                                </td>
                                <td>
                                    <div>
                                        <h6 class="text-center">Alimento Seco Para Gato Nulo 5Lb</h6>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-center">Nulo</h6>
                                </td>
                                <td >
                                    <div class="input-group">
                                        <input type="number" class="form-control " />
                                    </div>
                                </td>
                                <td>$105.315 - 5Lb</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-remover">
                                        <span class="material-icons remover">
                                            clear
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input is-valid" type="checkbox" value="" />
                                </td>
                                <td>
                                    <img class="img-producto" src={producto2} alt='a'></img>
                                </td>
                                <td>
                                    <div>
                                        <h6 class="text-center">Alimento Para Perro Evolve Classic Adulto</h6>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-center">Evolve</h6>
                                </td>
                                <td >
                                    <div class="input-group">
                                        <input type="number" class="form-control" />
                                    </div>
                                </td>
                                <td>$55.900 4Lb</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-remover">
                                        <span class="material-icons remover">
                                            clear
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input is-valid" type="checkbox" value="" />
                                </td>
                                <td>
                                    <img class="img-producto" src={producto3} alt='a'></img>
                                </td>
                                <td>
                                    <div>
                                        <h6 class="text-center">Cama Para Mascotas Guamba Donut Azul - Pequeña</h6>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-center">Guamba Donut</h6>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" class="form-control" />
                                    </div>
                                </td>
                                <td>$89.98</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-remover">
                                        <span class="material-icons remover">
                                            clear
                                        </span>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="form-check-input is-valid" type="checkbox" value="" />
                                </td>
                                <td>
                                    <img class="img-producto" src={producto4} alt='a'></img>
                                </td>
                                <td>
                                    <div>
                                        <h6 class="text-center">Lazo Ahogo Cuerda Gruesa</h6>
                                    </div>
                                </td>
                                <td>
                                    <h6 class="text-center">Pet Accesorios</h6>
                                </td>
                                <td>
                                    <div>
                                        <input type="number" class="form-control" />
                                    </div>
                                </td>
                                <td>$27.115</td>
                                <td>
                                    <button type="button" class="btn btn-danger btn-remover">
                                        <span class="material-icons remover">
                                            clear
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn btn-outline-dark m-4">
                        Ir A Pagar
                    </button>
                </div>
            </div>
        </div>

    )
}





export default TableCarrito;