import { Card } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useState, useContext} from "react"
import Button from "@restart/ui/esm/Button"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext.jsx"

//Muestro el item
const ItemDetail = ({item}) => {

    // Cantidad de items
    const [count, setCount] = useState(0)

    // Me va a indicar si el boton de agregar a carrito fue presionado
    const [botonAgregarACarrito, setBotonAgregarACarrito] = useState(false)

    // Traigo el contexto para usar en este componente
    const {cartList,agregarCarrito} = useCartContext()

    //  Verifico si se presiono el boton agregar al carrito
    const handleCarrito = (cant) =>{
        setBotonAgregarACarrito(true)
        agregarCarrito({...item, cantidad:cant})
    }

    console.log(cartList)


    let stock = 10
    let inicial = 1

    return (
        <>
        {item !== undefined &&
            item.length > 0 &&
                <Card key={item[0].id} style={{
                    width: '30rem',
                    display:'block',
                    marginTop:'100px',
                    marginRight:'auto',
                    marginBottom:'0px',
                    marginLeft:'auto'}}>
                    <Card.Img variant="top" src={item[0].imagen} />
                    <Card.Body>
                        <Card.Title>{item[0].marca} {item[0].modelo}</Card.Title>
                        <Card.Text>
                        {item[0].año}
                        </Card.Text>
                        <Card.Text>
                        {item[0].precio}
                        </Card.Text>
                        {
                            botonAgregarACarrito?
                                <div>
                                    <Link to='/carrito'>
                                        <Button className="btn btn-dark" variant="primary">
                                            Comprar
                                        </Button>
                                    </Link>
                                </div>
                            :
                                <div>
                                    <ItemCount stock = {stock} initial = {inicial} compra={handleCarrito}/>
                                </div>
                        }
                    </Card.Body>
                </Card>
            
        }
        </>
    )
}

export default ItemDetail