import RestaurantCard from "./restaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  //Local State Variable
  const [listOfRestaurants , setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  } 
  , [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filterBtn" onClick={() => {
          //Filter the logic here
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
          setListOfRestaurants(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resContainer">
        {/* <RestaurantCard  resName = 'KevinTers' cuisine='Chai aur Tea'/> */}
        {listOfRestaurants.map((restaurent) => (
          <RestaurantCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
