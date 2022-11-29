import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../css/modal.css";

function ModalLogin(props) {
  return (
    <Modal
      {...props}
      ize="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 id="TitleM">Inicio de sesión.</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario/Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu usuario" />
            <Form.Text className="text-muted">
              Nunca compartiremos tu correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
          </Form.Group>
          <div id="btns">
            <Button variant="primary" type="submit">
              Iniciar
            </Button>
            <br></br>
            <br></br>
            Si aun no te has registrado <br></br>↓↓↓<br></br>
            <Link to={"/registro1"}>
              <Button variant="primary" onClick={props.onHide}>
                Registrarse
              </Button>
            </Link>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer id="footer">
        <Button variant="danger" onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;

/*function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

render(<App />);*/
