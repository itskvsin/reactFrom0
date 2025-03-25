import RestaurantCard from "./restaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  //Local State Variable
  const [listOfRestaurants , setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filterBtn" onClick={() => {
          //Filter the logic here
          const filteredList = listOfRestaurants.filter((res) => res.data.avgRating >= 4);
          setListOfRestaurant(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resContainer">
        {/* <RestaurantCard  resName = 'KevinTers' cuisine='Chai aur Tea'/> */}
        {listOfRestaurants.map((restaurent) => (
          <RestaurantCard key={restaurent.data.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
