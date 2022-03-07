import { collection, documentId, query, Timestamp, where, writeBatch, getDocs, addDoc } from "firebase/firestore"
import { db } from "./config"



export const generarOrden = async (values, cart, totalCart, setOrderId, vaciarCart) => {
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