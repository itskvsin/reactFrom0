import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    } , []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json()
        // console.log("Full response:", JSON.stringify(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info, null, 2));

        setResInfo(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info);
        
    };
    // const {name , cuisines} = resInfo.restaurants[0].info;

    // resInfo === null ? <Shimmer /> : 
    return (
        <div className="menu">
            {/* <h1>{name}</h1> */}
            <h2>Menu</h2>
            {console.log(resInfo)}
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;