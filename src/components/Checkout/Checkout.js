import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import { collection, documentId, query, Timestamp, where, writeBatch, getDocs, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: ''
    })

    const generarOrden = async () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        }
        
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
        const productos = await getDocs(q)
        console.log(productos)
        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((el) => el.id === doc.id)
    
            if (doc.data().stock >= item.count) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.count
                })
            } else {
                outOfStock.push(item)
            }
        })

        if(outOfStock.length === 0){
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    vaciarCart()
                })
        } else {
            alert("No hay stock suficiente para completar la compra del producto " + outOfStock.map((el) => el.nombre).join(", ")+ ". Por favor, revise su carrito.")
        }
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre.length < 5) {
            alert('El nombre es demasiado corto')
            return
        }

        if(values.email.length < 7) {
            alert('El email es demasiado corto')
            return
        }

        if(values.tel.length < 7) {
            alert('El teléfono es demasiado corto')
            return
        }
        generarOrden()
    }

    if(orderId) {
        return(
            <>  
                <div className="container my-5">
                <h2>Muchas gracias por tu compra en WWW Tecnologías</h2>
                <hr/>
                <h4>Tu orden ha sido generada con el ID: {orderId}</h4>
                <h4>Recibirás más información sobre tu pedido en tu correo electrónico</h4>
                </div>
            </>
        )
    }

    if(cart.length === 0) {
        return (
            <div>
                <h2>Carrito vacío</h2>
                <Link to="/">
                    <button className="btn btn-success">Volver</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="my-5 container">
            <h2>Finalice su compra</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Tu email"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />

                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />

                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )

    // addDoc(ordersRef, orden)
        //     .then((resp) => {
        //         cart.forEach((item) => {
        //             const docRef = doc(db, "productos", item.id)
        //             getDoc(docRef)
        //                 .then((dbDoc) => {
        //                     if (dbDoc.data().stock >= item.cantidad) {
        //                         updateDoc(docRef, {stock: dbDoc.data().stock >= item.cantidad})
        //                     } else{
        //                         alert("No hay stock suficiente para completar la compra del producto " + item.nombre + "el stock actual es de" + dbDoc.data().stock + "unidades")
        //                     }

        //                 })
                    
        //         })
        //         setOrderId(doc.id)
        //         vaciarCart()
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
}