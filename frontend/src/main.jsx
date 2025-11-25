import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Product from './component/products.jsx';
import './component/app.css'
import './component/normalize.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product />
  </StrictMode>,
)
