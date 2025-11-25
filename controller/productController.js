import { obtAll,
    obtProduct,
    insert,
    update,
    erase
 } from "../models/producModel.js";

export const showProducts = async (req, res) => {
    try{
        const result = await obtAll();
        res.json(result);
    }catch (error){
        res.status(500).json({error: error.message});
    }
};

export const showProduct = async (req, res) => {
    try{
        const result = await obtProduct(req.params.id);
        if(!result){
            return res.status(400).json({message: 'Producto no encontrado'});
        }
        res.json(result);
    } catch(error){
        res.status(500).json({error: error.message});
    }
};

export const insertProduct = async (req, res) => {
    try{
        const result = await insert (req.body);
        res.status(201).json(result);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const updateProduct = async (req, res) =>{
    try{
        const result = await update(req.params.id, req.body);
        res.json(result);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const removeProduct = async (req, res) => {
    try{
        await erase(req.params.id);
        res.json({message: 'Producto eliminado correctamente'});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};