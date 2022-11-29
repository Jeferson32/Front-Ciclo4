import React from "react";
import "../css/navegacion.css";
import logo from "../images/dog.png";


const NavbarLogin = () => {

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
                                <img src={logo} alt="as" className="logo"></img>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default NavbarLogin;