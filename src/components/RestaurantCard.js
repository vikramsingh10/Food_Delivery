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
    aggregatedDiscountInfoV3,
  } = resData;

  return (
    <div className="w-64 rounded-lg  transition-transform duration-200 hover:scale-95  hover:shadow-lg  hover:rounded-3xl">
      <div className="relative">
        <img
          className="w-64 h-40 object-cover rounded-3xl"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <p className="absolute bottom-2 left-4 bg-white bg-opacity-75 text-black px-2 py-1 rounded-lg text-xl font-bold">
          {aggregatedDiscountInfoV3?.header}{" "}
          {aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>

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
