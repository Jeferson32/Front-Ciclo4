import React from "react";
import { Link } from "react-router-dom";
import "../css/navegacion.css";
import logo from "../images/dog.png";

const Navegacion = (props) => {

  return (
    <>
      <header id="headerP">
        <nav

          className="rd-navbar rd-navbar-transparent  rd-navbar-static rd-navbar--is-stuck"
        >
          <div className="rd-navbar-inner">
            <div className="rd-navbar-nav-wrap ">
              <div className="rd-navbar-nav-wrap-bg"></div>
              <div>
                <Link to={"/home"}>
                  <img src={logo} alt="as" className="logo"></img>
                </Link>
              </div>
              <ul className="rd-navbar-nav">
                <li>
                  <Link to={"/home"}>
                    Inicio<span class="material-icons icon">pets</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/tienda"}>
                    Tienda
                    <span class="material-icons icon">sell</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/producto"}>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link to={"/contacto"}>
                    Contáctenos<span class="material-icons icon">pets</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/nosotros"}>
                    Nosotros<span class="material-icons icon">pets</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/carrito"}>
                    Carrito De Compra
                    <span class="material-icons icon">shopping_cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navegacion;
