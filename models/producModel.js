import {db} from '../config/db.js';

export const obtAll = async () => {
    const [result] = await db.query('SELECT * FROM productos');
    return result;
};

export const obtProduct = async (id) =>{
    const [result] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
    return result[0];
};

export const insert = async (product) => {
    const {nombre, precio} = product;
    const [result] = await db.query('INSERT INTO productos(nombre, precio) VALUES (?,?)',[nombre, precio]);
    return {id: result.insertID, ...product};
};

export const update = async (id, product) => {
    const {nombre, precio} = product;
    await db.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id]);
    return {id, ...product};
};

export const erase = async (id) =>{
    await db.query('DELETE FROM productos WHERE id = ?');
    return id;
};