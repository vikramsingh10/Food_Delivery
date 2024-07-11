import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ resData }) => {
  if (!resData) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <div className="res-details">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <div className="stars">
          <span>Rating: {avgRating}</span>
          <span>Time: {sla?.slaString}</span>
        </div>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
