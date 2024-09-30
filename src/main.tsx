import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.scss'
import Layout from './components/Layout/index.tsx';
import { ProductsList } from './components/ProductsList/index.tsx';
import { ProductDetail } from './components/ProductDetail/index.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Layout>
        <Routes>
          <Route path="/items" element={<ProductsList />} />
          <Route path="/items/:id" element={<ProductDetail />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)
