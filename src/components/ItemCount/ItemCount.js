import {useState} from 'react';

export const ItemCount = ({max, min = 1, onAdd}) => {

    const [counter, setCounter] = useState(min);

    const handleSumar = () => {
        counter < max && setCounter( counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter( counter - 1)
    } 

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
            &nbsp;
            &nbsp;
            <br></br>
            <br></br>
            <button 
                    type="button" 
                    className="btn btn-success"
                    onClick= {() => onAdd(counter)}
                >
                    Agregar al Carrito
            </button>
        </div>
        
        
    )
}