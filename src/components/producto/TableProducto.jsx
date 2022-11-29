import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/tablaProductos.css";
import Swal from "sweetalert2";
function TableProductos(props) {
  const [dataProductos, setdataProductos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    await axios
      .get("/productos/listarProductos")
      .then((res) => {
        setdataProductos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function borrarProducto(idProducto) {
    axios
      .post("/productos/borrar", { idProducto: idProducto })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    cargarDatos();
  }

  function aler(idProducto, nombreProducto) {
    Swal.fire({
      title: "¿Desea eliminar el " + nombreProducto,
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      denyButtonText: "Eliminar",
      confirmButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Producto No Eliminado", "", "info");
      } else if (result.isDenied) {
        borrarProducto(idProducto);
        Swal.fire({
          icon: "success",
          title: "Producto Borrado",
        });
      }
    });
  }
  return (
    <div class="container tabla-usuarios">
      <Link to={"/producto/create"}>
        <button type="button" class="btn btn-outline-success text-center">
          Nuevo Producto
          <span class="material-icons icon-usuario">person_add</span>
        </button>
      </Link>
      <table class="table table-bordered table-hover mt-5">
        <thead class="table-dark">
          <tr>
            <th scope="col">ID Producto</th>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">marca</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dataProductos.map((producto, index) => (
            <tr key={index}>
              <th>{producto.idProducto}</th>
              <th>{producto.nombreProducto}</th>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.marca}</td>

              <td>
                <Link to={`/producto/update/${producto.idProducto}`}>
                  <button
                    type="button"
                    class="btn btn-outline-success btn-editar mx-3"
                  >
                    <span class="material-icons icon-edit">edit</span>
                  </button>
                </Link>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-eliminar"
                  onClick={() => {
                    aler(producto.idProducto, producto.nombreProducto);
                  }}
                >
                  <span class="material-icons icon-edit">person_remove</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableProductos;
