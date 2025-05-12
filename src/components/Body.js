import RestaurantCard from "./restaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";

const Body = () => {

  //Local State Variable
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filterRes , setFilterRes] = useState([]);
  const [searchText , setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  } 
  , [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }


  //Conditional Rendering :- Rendering on condition
  // if (listOfRestaurants.length === 0) {
  //   return (
  //     <div>
  //       <Shimmer />
  //       {/* <video width="320" height="240" controls autoPlay>
  //       <source src="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.vecteezy.com/free-videos/loading-gif&ved=2ahUKEwj4ua6d-pONAxW9mq8BHX5qANwQuAJ6BAgQEAU&usg=AOvVaw2fi5uCGN_mSe_0UaiMjXLD" type="gif"/>
  //       Your browser does not support the video tag.
  //     </video>  */} 
  //     {/* A loading screen can be added later */}
  //     </div>
  //   );
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer /> 
  ) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type='text' className="searchBox" placeholder="Enter item name: " value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }}/>
        <button onClick={() => {

          const filteredRestaurant = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilterRes(filteredRestaurant)

        }}>Search</button>
      </div>
        <button className="filterBtn" onClick={() => {
          //Filter the logic here
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
          setFilterRes(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resContainer">
        {filterRes.map((restaurent) => (
          <Link to={"/restaurants/" + restaurent.info.id} key={restaurent.info.id}> <RestaurantCard resData={restaurent} /> </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
