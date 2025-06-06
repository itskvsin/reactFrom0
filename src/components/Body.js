import RestaurantCard , { WithPromotedLabel } from "./restaurantCard";
import { useEffect, useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {

  //Local State Variable
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filterRes , setFilterRes] = useState([]);
  const [searchText , setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)

  useEffect(()=>{
    fetchData();
  } 
  , [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) {
    return (
      <h1>Looks like you Offline</h1>
    )
  }

  const { loggedInUser , setUserName2 } = useContext(UserContext)

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
      <div className="filter flex gap-10 items-center">
      <div className="search">
        <input type='text' className="searchBox bg-gray-100 border-solid border-1 m-3 p-2 rounded shadow-lg" placeholder="Enter item name: " value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }}/>
        <button className="cursor-pointer bg-emerald-200 py-2 px-2 rounded shadow-lg" onClick={() => {

          const filteredRestaurant = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
          )
          setFilterRes(filteredRestaurant)

        }}>Search</button>
      </div>
        <div>
          <input className="border-1 bg-gray-50 rounded px-4 py-2 outline-0 shadow-lg font-bold"
          placeholder="Enter your name" 
          value={loggedInUser}
          onChange={(e) => {setUserName2(e.target.value)}} 
          />
        </div>
        <button className="filterBtn cursor-pointer text-red-400 text-xl text-shadow-sm font-bold " onClick={() => {
          //Filter the logic here
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
          setFilterRes(filteredList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRes.map((restaurent) => (
          <Link to={"/restaurants/" + restaurent.info.id} key={restaurent.info.id}> 
            {restaurent.info.isOpen? (
              <RestaurantCardPromoted resData={restaurent} />
            ) : (
              <RestaurantCard resData={restaurent} />
            )}
          </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Body;
