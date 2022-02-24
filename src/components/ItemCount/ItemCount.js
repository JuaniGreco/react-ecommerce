export const ItemCount = ({max, min = 0, counter, setCounter, handleAgregar}) => {


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
            <button 
                    type="button" 
                    className="btn btn-success"
                    onClick= {handleAgregar}
                >
                    Agregar al Carrito
            </button>
        </div>
        
        
    )
}