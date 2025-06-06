import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

// const restaurentCardStyle = {
//   backgroundColor: "#f0f0f0",
//   color: "black",
// };

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-68 m-3 p-8 h-[90%] rounded-xl shadow-md hover:bg-gradient-to-r hover:from-stone-200 hover:to-stone-100 cursor-pointer">
      <center>
        <img
          className="rounded object-contain"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
      </center>
      <center>
        <h3 className="font-bold my-2">{name}</h3>
      </center>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo }</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-emerald-300 text-black rounded px-10 py-2 ">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;