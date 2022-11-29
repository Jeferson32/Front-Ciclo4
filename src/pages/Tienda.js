import React from "react";
import BannerTienda from "../components/BannerTienda";
import CategoriasTienda from "../components/CategoriasTienda";
import '../css/tienda.css'
import Navegacion from '../components/Navegacion'


function Tienda(props) {
  return (
    <div>
      <Navegacion></Navegacion>
      <BannerTienda></BannerTienda>
      <CategoriasTienda></CategoriasTienda>
    </div>
  );
};

export default Tienda;
