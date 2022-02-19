import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    const [cantidad, setCantidad] = useState(0);

    const { cart, agregarAlCarrito, isInCart } = useContext(CartContext);

    console.log(cart);

    const handleAgregar = () => {
        if (cantidad === 0) return
        
        if (!isInCart(id)) {
            const addProducto = {
                id, nombre, precio, stock, categoria, cantidad
        }
        agregarAlCarrito(addProducto)
    }
    }
    return (
        <div>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            <h5>Stock: {stock}</h5>
            <h5>Categoria: {categoria}</h5>
            <h5>Código de producto: {id}</h5>
            <br></br>
            {
                isInCart(id) 
                    ? <Link to="/cart" className='btn btn-success'>
                        Terminar la compra
                    </Link> 
                :
                <>
                <ItemCount max={stock} counter={cantidad} setCounter={setCantidad} />
                <br></br>
                
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick= {handleAgregar}
                >
                    Agregar al Carrito
                </button>
                </>
            }
            <br></br>
            <br></br>
            <Link to = '/'>
                <Button variant="primary">Volver</Button>
            </Link>
        </div>
        
    )
}