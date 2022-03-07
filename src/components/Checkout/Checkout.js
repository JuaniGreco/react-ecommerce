import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"
import { generarOrden } from "../../firebase/generarOrden"
import { validar } from "./validar"

export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        validar(values) && generarOrden(values, cart, totalCart, setOrderId, vaciarCart)
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