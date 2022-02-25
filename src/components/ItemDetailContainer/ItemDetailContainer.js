
import { useEffect, useState } from 'react';
import { pedirDatos } from '../pedirDatos';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", itemId)
        getDoc (docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })


        // pedirDatos()
        //     .then((res) => {
        //         setItem( res.find((el) => el.id === Number(itemId)) )
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
    }, [])

    return (
        <div className='container my-5'>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
)
};
