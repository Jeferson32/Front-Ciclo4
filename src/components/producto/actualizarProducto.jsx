import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/formularios.css";
import banner from "../../images/bg-image-6.jpg";
import Swal from "sweetalert2";

function ActualizarProducto(props) {
  const params = useParams();
  const navegar = useNavigate();
  //Hooks
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    axios
      .post("/productos/datosProducto", { idProducto: params.idProducto })
      .then((res) => {
        console.log(res.data);
        const dataProducto = res.data[0];
        setNombreProducto(dataProducto.nombreProducto);
        setDescripcion(dataProducto.descripcion);
        setPrecio(dataProducto.precio);
        setMarca(dataProducto.marca);
        setCantidad(dataProducto.cantidad);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function editarUsuario(event) {
    event.preventDefault();
    var actualizarUsuario = {
      nombreProducto: nombreProducto,
      descripcion: descripcion,
      precio: precio,
      marca: marca,
      cantidad: cantidad,
      idProducto: params.idProducto,
    };

    axios
      .post("/productos/editar", actualizarUsuario)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data,
        });
        navegar("/producto");
      })
      .then((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div>
        <img src={banner} className="img-banner" alt=""></img>
      </div>
      <div className="mx-auto text-center formulario">
        <h2 className="titilo-actualizar">Actualizar Producto</h2>
        <div className="w-75 mx-auto text-center">
          <form onSubmit={editarUsuario}>
            <fieldset disabled={true}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="idproductfloating"
                  placeholder="Id Producto"
                  name="product_id"
                  required={true}
                  value={params.idProducto}
                />
                <label for="idproductfloating">Id producto</label>
              </div>
            </fieldset>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Nombre Producto"
                name="product_title"
                minLength={3}
                required={true}
                value={nombreProducto}
                onChange={(e) => {
                  setNombreProducto(e.target.value);
                }}
              />
              <label for="floatingInput">Nombre Producto</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Descripción"
                name="product_descripción"
                minLength={3}
                required={true}
                value={descripcion}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
              />
              <label for="floatingInput">Descripción</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type={"number"}
                min={0}
                className="form-control"
                id="floatingPrice"
                placeholder="Precio"
                name="product_price"
                required={true}
                value={precio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
              />
              <label for="floatingPrice">Precio</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type={"number"}
                min={0}
                className="form-control"
                id="floatingPrice"
                placeholder="Precio"
                name="product_price"
                required={true}
                value={cantidad}
                onChange={(e) => {
                  setCantidad(e.target.value);
                }}
              />
              <label for="floatingPrice">Cantidad</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingBrand"
                placeholder="Marca"
                name="product_brand"
                minLength={3}
                required={true}
                value={marca}
                onChange={(e) => {
                  setMarca(e.target.value);
                }}
              />
              <label for="floatingBrand">Marca</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-outline-success"
              type="submit"
            >
              Actualizar
            </button>

            <Link to={"/producto"}>
              <button className="btn btn-outline-dark m-5">Regresar</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ActualizarProducto;
