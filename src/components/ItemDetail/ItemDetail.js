import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {


    const {  agregarAlCarrito, isInCart } = useContext(CartContext)
    const [addItem] = useState(false)

    const onAdd = (count) => {
        addItem(true)
        const itemAdd = {
            id, nombre, img, desc, precio, stock, count
        }
        agregarAlCarrito(itemAdd)
    }

    return (
        <div>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            <h5>Stock: {stock}</h5>
            <h5>Categoria: {categoria}</h5>
            <br></br>
            {
                isInCart(id) 
                    ? <Link to="/cart" className='btn btn-success'>
                        Terminar la compra
                    </Link> 
                :
                <>
                <ItemCount max={stock}  min={1} onAdd={onAdd}/>
                <br></br>
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