import axios from "axios";
import { useState } from "react";

function App(){
    const [product, saveProduct]= useState({
        nombre:'',
        precio:''
    });

    function readProduct(e){
        saveProduct({...product, [e.target.nombre]:e.target.value})
    };

    async function addProduct() {
        const resultado = await axios.post('http://localhost:3001/productos', product)
    };

    return(
        <>
        <h2>Nuevo Producto</h2>
        <form onSubmit={addProduct}>
            <div>
                <label>Nombre:</label>
                <input
                type="text"
                name="nombre"
                placeholder="Nombre Producto"
                onChange={readProduct}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                type="number"
                name="precio"
                placeholder="Precio"
                min= "0.00"
                onChange={readProduct}
                />
            </div>
            <button type="submit">Guardar</button>
        </form>
        </>
    )
}

export default App;