import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../pedirDatos";
import './ItemListContainer.css';

export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams ();

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (catId) {
                    setProductos( res.filter((el) => el.categoria === catId ) )
                } else {
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}