import './styles.css';
import React from 'react';
import { ItemListContainer } from './components/ItemListcontainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting= "Juani Greco"/>
    </>
  );
}

export default App;
