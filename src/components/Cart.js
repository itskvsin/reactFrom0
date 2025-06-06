import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((s) => s.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div>
        <button
          className="bg-red-400 shadow-lg rounded px-4 py-2 my-2 cursor-pointer text-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-8/12 m-auto">
      {cartItems.length === 0 && <h1>Your Cart is empty Add items to Cart!!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
