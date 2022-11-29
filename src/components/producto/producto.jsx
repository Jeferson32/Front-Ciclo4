
import "../../css/bannerProductos.css"
import Navegacion from "../Navegacion";
import TableProductos from "./TableProducto";

function ProductoIndex(props) {
    
    return (
        <div >
            <Navegacion></Navegacion>
            <div id="productBanner">
                <div >
                    <h3>Productos</h3> 
                </div>
            </div>
            <TableProductos></TableProductos>
            
        </div>
    );
}

export default ProductoIndex;
