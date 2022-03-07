import './Contador.css';
import { useState } from 'react'


export const Contador = () => {

    const [clicks, setClicks] = useState(0)

    const sumarClick = () => {
        setClicks( clicks + 1)
    }

    return (
        <>
            <></>
            <button className='mi-boton' onClick={sumarClick}>Agregar al carrito</button>
            <br></br>
            <h6>Cantidad a agregar: {clicks} unidades</h6>
        </>
    )
}