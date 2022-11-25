
//import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';




function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/contactos' element={<ContactoPage/>}></Route>
          <Route path='/nosotros' element={<NosotrosPage/>}></Route>  
          <Route path='/servicios' element={<ServiciosPage/>}></Route>  
        </Routes>
     </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
