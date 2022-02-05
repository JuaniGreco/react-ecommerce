import { stock } from "../data/stock";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const pedirDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(stock);
            }, 2000);
        });
    }

     useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProductos( res )
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}