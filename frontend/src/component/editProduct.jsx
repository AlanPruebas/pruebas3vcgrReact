import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App({id}) {
    console.log(id);
    const [producto, saveProduct] = useState({
        nombre: '',
        precio: 0
    });
    function readProduct(e){
        saveProduct({
            ...producto, [e.target.name]:e.target.value
        });
    };

    async function updateProduct() {
        const result = await axios.put(`http://localhost:3001/productos/${id}`);
    };

    async function checkProduct() {
        const result = await axios.put(`http://localhost:3001/productos/${id}`);
        saveProduct(result.data);
    }

    useEffect( () => {
        checkProduct();
    }, []
    );

    return(
        <>
        <h2>Editar Producto</h2>
        <form onSubmit={updateProduct}>
            <div>
                <label>Nombre:</label>
                <input
                type="text"
                name="nombre"
                placeholder="Nombre Producto"
                value={producto.nombre}
                onChange={readProduct}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                type="number"
                name="precio"
                placeholder="precio"
                min= "0.00"
                value={producto.precio}
                onChange={readProduct}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
        </>
    )
}

export default App;