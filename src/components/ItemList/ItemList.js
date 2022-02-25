import { Contenedor } from "../Contenedor/Contenedor";
import { Item } from "../Item/Item";

export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Catalogo</h2>   
            <hr/>
            <br></br>
            <div className="row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
        
    )
}