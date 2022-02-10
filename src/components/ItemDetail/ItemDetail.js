import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    

    return (
        <div>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre}/>
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>
            <h5>Stock: {stock}</h5>
            <h5>Categoria: {categoria}</h5>
            <Link to = '/'>
                <Button variant="primary">Volver</Button>
            </Link>

            {/* CONTADOR */}

        </div>
        
    )
}