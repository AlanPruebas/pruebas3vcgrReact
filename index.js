import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', productRoutes);

const puerto = 3001;

app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`);
});