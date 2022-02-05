import { Contenedor } from "../Contenedor/Contenedor";
import { Item } from "../Item/Item";
import '../ItemListcontainer/ItemListContainer.css';



export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>Productos</h2>   
            <hr/>
            <br></br>
            <div className="item-list-container-row">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
            
        </Contenedor>
    )
}