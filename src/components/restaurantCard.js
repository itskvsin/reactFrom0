import { CDN_URL } from "../utils/constant";

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
  return (
    <div className="w-68 m-3 p-8 h-[90%] rounded-xl shadow-md hover:bg-gradient-to-r hover:from-stone-200 hover:to-stone-100">
      <center>
        <img
          className="rounded"
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
    </div>
  );
};

export default RestaurantCard;