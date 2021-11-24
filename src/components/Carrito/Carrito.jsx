import { Card, ThemeProvider } from "react-bootstrap";
import {useCartContext} from "../../context/CartContext.jsx"
import {useContext, useState} from 'react'

export const Carrito = () => {

    const {cartList, borrarCarrito} = useCartContext()

    return (
        <>
        {
            cartList !== undefined &&
                cartList.length == 0?
                    <h1>Carrito vacio</h1>
                :
                    <>
                        {cartList.map((prod, index) => <Card key={prod[index].id} style={{
                                width: '30rem',
                                display:'block',
                                marginTop:'100px',
                                marginRight:'auto',
                                marginBottom:'0px',
                                marginLeft:'auto'}}>
                                <Card.Img variant="top" src={prod[index].imagen} />
                                <Card.Body>
                                    <Card.Title>{prod[index].marca} {prod[index].modelo}</Card.Title>
                                    <Card.Text>
                                        Año: {prod[index].año}
                                    </Card.Text>
                                    <Card.Text>
                                        Precio: {prod[index].precio}
                                    </Card.Text>
                                    <Card.Text>
                                        Cantidad: {prod.cantidad}
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                        }
                        <button onClick={borrarCarrito} className="btn btn-dark" variant="primary">
                            Vaciar carrito
                        </button>
                    </>
        }        
        </>
    )
}
