import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext ()

export const CartProvider = ({children}) => {
        
        const [cart, setCart] = useState([])

        const agregarAlCarrito = (item) => {
            setCart( [...cart, item] )
        }
        const isInCart = (id) => {
            return cart.some((prod) => prod.id === id)
        }

        const cantidadCart = () => {
            return cart.reduce((acc, prod) => acc + prod.count, 0)
        }

        const totalCart = () => {
            return cart.reduce((acc, prod) => acc + prod.count * prod.precio, 0)
        }

        const vaciarCart = () => {
            setCart([])
        }

        const eliminarItem = (id) => {
            setCart([...cart.filter((prod) => prod.id !== id)])
        }
        
    return (
        <CartContext.Provider value={{
            cart, 
            agregarAlCarrito, 
            isInCart, 
            cantidadCart,
            totalCart,
            vaciarCart,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>

    )
}