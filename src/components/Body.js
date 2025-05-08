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

  if (listOfRestaurants.length === 0) {
    return (
      <div>
        <h1>Loading....</h1>
        {/* <video width="320" height="240" controls autoPlay>
        <source src="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.vecteezy.com/free-videos/loading-gif&ved=2ahUKEwj4ua6d-pONAxW9mq8BHX5qANwQuAJ6BAgQEAU&usg=AOvVaw2fi5uCGN_mSe_0UaiMjXLD" type="gif"/>
        Your browser does not support the video tag.
      </video>  */} 
      {/* A loading screen can be added later */}
      </div>
    );
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
