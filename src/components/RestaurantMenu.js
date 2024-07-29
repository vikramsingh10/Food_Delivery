import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

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

      {/*Catogeries accordions */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
