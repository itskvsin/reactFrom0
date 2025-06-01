import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex , setShowIndex] = useState(null)
    const { resId } = useParams();  
    
    const resInfo = useRestaurantMenu(resId)
    
    if (!resInfo) {
        return <Shimmer />
    }
    
    const restaurants = resInfo?.cards[2]?.card?.card?.info;
    const  { itemCards }  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(category);
    

    if (!restaurants || !itemCards) {
        return <Shimmer /> 
    }

    const {name , cuisines , costForTwoMessage} = restaurants;

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-3xl my-6">{name}</h1>
            <p className="font-semibold text-xl">{cuisines.join(' ,')} - {costForTwoMessage}</p>
            {/* Catehories Accordians */}
            {category.map((category , index) => 
            <div key={category?.card?.card?.title}>
                {/* Controlled Component */}
                <RestaurantCategory 
                data={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setShowIndex = { () => {setShowIndex(index)} }
                />
            </div>)}
        </div>
    )
}

export default RestaurantMenu;