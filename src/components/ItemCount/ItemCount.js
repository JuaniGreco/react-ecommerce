import { useState } from 'react';

export const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter( counter + 1)
    }

    const restar = () => {
        setCounter( counter - 1)
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={restar}>-</button>
            <span className="mx-3">{counter}</span>
            <button className="btn btn-primary" onClick= {sumar}>+</button>
        </div>
    )
}