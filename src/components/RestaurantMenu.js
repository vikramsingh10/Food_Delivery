import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return (
    <div className="p-5 max-w-full mx-auto bg-gray-100">
      <h1 className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
      {cuisines && (
        <p className="text-xl text-gray-700 mb-4">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      )}
      <h3 className="text-xl font-semibold text-gray-600 mb-4">
        Rating: {avgRating}
      </h3>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Menu</h2>
      <ul className="list-none p-0 m-0">
        {itemCards?.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center space-x-4 cursor-pointer hover:bg-gray-200 transition duration-300">
            <div className="flex-1">
              <strong>{item?.card?.info?.name}</strong> - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
              <p className="text-gray-600 mt-1">
                {item?.card?.info?.description}
              </p>
            </div>
            {item?.card?.info?.imageId && (
              <img
                className="w-24 h-auto rounded-lg"
                src={MENU_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
