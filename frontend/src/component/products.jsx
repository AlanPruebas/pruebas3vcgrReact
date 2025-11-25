import axios from 'axios';
import { useState, useEffect } from 'react';
import newProduct from './newProduct.jsx';
import editProduct from './editProduct.jsx';

function App(){
    const [productos, guardarProductos] = useState([]);
    const [id, setID] = useState([]);
    const [edit, setEdit] = useState(false);
    const [newp, setNew] = useState(false);
    async function consulta() {
        const result = await axios.get('http://localhost:3001/productos');
        guardarProductos(result.data);
    }
    useEffect( () => {
        consulta();
    },[]);

    async function eraseProduct(id) {
        const result =await axios.delete(`http://localhost:3001/productos/${id}`);
        consulta();
    }

    if(edit){
        return <editProduct id = {id}/>
    };

    if(newp){
        return <newProduct />
    };

    return(
        <>
        <main className='caja-contenido col-9'>
            <h2>Lista de productos</h2>
            <button onClick={() => {setNew(true);}} className='btn-nuevo'>Nuevo Producto</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((producto) =>(
                            <tr key = {producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>Bs.{producto.precio}</td>
                            <td>
                                <button onClick = {() => {
                                    setEditar(true);
                                    setID(producto.id)
                                }} className='btn-editar'>Editar</button>
                                
                                <button onClick = {() =>
                                    eliminaProducto(producto.id)
                                } className='btn-eliminar'>Eliminar</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
        </>
    )
}

export default App;