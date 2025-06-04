import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  // console.log(items)

  const dispatch = useDispatch(); //useDispatch hook is used to dispatch actions to the store

  const handleAddItem = (item) => {
    //Dispatch an action to add the item to the cart
    dispatch(addItem(item));
    // console.log(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 rounded text-start flex justify-between items-center relative"
        >
          <div className="py-2 w-3/4">
            <span>{item.card.info.name}</span>
            <p className="text-sm">₹{item.card.info.price / 100}</p>
            <p className="text-xs w-10/12">{item.card.info.description}</p>
          </div>

          <div className="w-30">
            <img src={CDN_URL + item.card.info.imageId} className="rounded" />
            <button
              onClick={() => handleAddItem(item)}
              className="bg-emerald-200 border-2 border-emerald-400 px-6 py-2 absolute right-1 bottom-1 rounded-lg cursor-progress"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
