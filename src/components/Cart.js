import ItemList from "./ItemList";
import { useSelector } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((s) => s.cart.items)
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                {console.log(<ItemList items={cartItems} />)}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;