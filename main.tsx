import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './src/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './src/template/about.tsx';
import Add from './src/template/add.tsx';
import Delete from './src/template/delete.tsx';
import Home from './src/template/home.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './src/global.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/blog_speak_frontend/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='add' element={<Add />} />
          <Route path='delete' element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
