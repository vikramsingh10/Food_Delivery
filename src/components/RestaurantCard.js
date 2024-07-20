import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantCard = ({ resData }) => {
  if (!resData) {
    return <Shimmer />;
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
    <div className="w-64 border border-gray-300 rounded-lg shadow-md transition-transform duration-200 hover:scale-95 hover:border-black hover:shadow-lg m-1.5 p-1.5">
      <img
        className="w-full h-auto object-cover rounded-t-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>Rating: {avgRating}</span>
          <span>Time: {sla?.slaString}</span>
        </div>
        <h4 className="text-md font-semibold mt-2">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
