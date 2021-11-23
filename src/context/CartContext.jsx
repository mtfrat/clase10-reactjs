import {createContext, useState} from 'react'

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {
        setCartList([item])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
