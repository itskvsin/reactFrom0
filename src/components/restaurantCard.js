import { CDN_URL } from "../utils/constant";

const restaurentCardStyle = {
  backgroundColor: "#f0f0f0",
  color: "black",
};

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
    <div className="resCard" style={restaurentCardStyle}>
      <center>
        <img
          className="resImg"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
      </center>
      <center>
        <h3>{name}</h3>
      </center>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo }</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;