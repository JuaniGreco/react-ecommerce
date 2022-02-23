import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css';


export const Item = ( {id, nombre, precio, img, desc} ) => {

    return (
        <Card style={{ width: '30rem', margin: '10px'}}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                
                
            </Card.Body>
            <Card.Text>
                    Precio: ${precio}
            </Card.Text>
            <Link to={`/detail/${id}`}>
                <Button variant="primary" classname="btn-ver-mas">Ver más</Button>        
            </Link>
        </Card>
    )
}