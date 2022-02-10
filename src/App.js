import './styles.css';
import React from 'react';
import { ItemListContainer } from './components/ItemListcontainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Catalogo } from './components/Catalogo';
import { Cart } from './components/Cart/Cart';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/" element={ <ItemListContainer greeting= "Juani Greco"/>} />
          <Route path='/productos/:catId' element={ <ItemListContainer/>} />
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
          {/*<Route path='/carrito' element={<Cart />} />*/}

          <Route path="*" element={ <Navigate to='/'/>} />

        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
