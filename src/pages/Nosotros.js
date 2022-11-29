import React from "react";
import BannerNosotros from "../components/BannerNosotros";
import Navegacion from "../components/Navegacion";
import NosotrosTienda from "../components/NosotrosTienda";




const Nosotros = () => {
  return (
    <div>
      <Navegacion></Navegacion>
      <BannerNosotros></BannerNosotros>
      <NosotrosTienda></NosotrosTienda>
    </div>
  );
};

export default Nosotros;
