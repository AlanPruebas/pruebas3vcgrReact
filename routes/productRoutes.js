import express from 'express';
import{
    showProducts,
    showProduct,
    insertProduct,
    updateProduct,
    removeProduct
} from '../controller/productController.js'

const routes = express.Router();
routes.get('/productos', showProducts);
routes.get('/productos/:id', showProduct);
routes.get('/productos/adi', insertProduct);
routes.get('/productos/:id', updateProduct);
routes.get('productos/:id', removeProduct);

export default routes;