import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import "../../css/formularios.css";
import banner from "../../images/bg-image-4.jpg";
import Navegacion from "../Navegacion";
import uniquid from "uniqid";
import Swal from "sweetalert2";

function CrearProducto(props) {
  //Hooks
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [marca, setMarca] = useState("");
  const [cantidad, setCantidad] = useState("");

  function nuevoProducto(event) {
    event.preventDefault();
    var producto = {
      nombreProducto: nombreProducto,
      descripcion: descripcion,
      precio: precio,
      marca: marca,
      cantidad: cantidad,
      idProducto: uniquid(),
    };
    console.log(producto);
    axios
      .post("/productos/crearProducto", producto)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data,
        });
        clear();
      })
      .then((err) => {
        console.log(err);
      });
  }

  function clear() {
    setNombreProducto("");
    setDescripcion("");
    setPrecio("");
    setCantidad("");
    setMarca("");
  }

  return (
    <div>
      <Navegacion></Navegacion>
      <div>
        <img src={banner} className="img-banner" alt=""></img>
      </div>
      <div className="mx-auto text-center m-3 p-3">
        <h2 className="titilo-actualizar">Nuevo Producto</h2>
        <div className="w-75 mx-auto text-center">
          <form onSubmit={nuevoProducto}>
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
                defaultValue={0}
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
                defaultValue={0}
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
              Crear
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
export default CrearProducto;
