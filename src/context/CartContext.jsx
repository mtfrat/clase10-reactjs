import {useContext,createContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
} 

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {

        // Guardo en indice el producto que fue agregado anteriormente
        const index = cartList.findIndex (i => i.id === item.id)

        // Si item no esta vacio, es decir, el producto esta en la posicion 0 o superior
        if(index > -1){
            const cantidadAnterior = cartList[index].cantidad

            cartList.splice(index,1)
            setCartList([...cartList,{...item, cantidad: item.cantidad + cantidadAnterior}])
        } else{
            setCartList([...cartList,item])
        }
    }

    const borrarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarCarrito,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
