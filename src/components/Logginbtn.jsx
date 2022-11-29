import React from "react";
import "../css/navegacion.css";
import ModalLogin from "./ModalLogin";

const Login = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div classname="">
        <button type="button" class="btn btn-outline-light me-2" onClick={() => setModalShow(true)}>
          Login
        </button>
        <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
      </div>
      
    </>
  );
};

export default Login;
