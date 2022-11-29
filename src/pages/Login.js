import React from "react";
import '../css/formularios.css'
import NavbarLogin from "../components/NavbarLogin";
import FormLogin from "../components/FormLogin";





const Login = () => {
    return (
        <div>
            <NavbarLogin></NavbarLogin>
            <FormLogin></FormLogin>
        </div>
    );
};

export default Login;