import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div>
            <Link to='/carrito'>
            <button style={{width:'40px',borderRadius:'10px', position:'relative',top:'5px'}}>
                <i class="fas fa-shopping-cart"></i>
            </button>
            </Link>
        </div>
    )
}

export default CartWidget