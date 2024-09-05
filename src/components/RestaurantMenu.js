import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [expand, setExpand] = useState();

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

    const handleToggle = (index) => {
      setExpand(expand === index ? null : index);
    };

  return (
    <div className="p-5 w-9/12 mx-auto">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
        {cuisines && (
          <p className="text-xl text-gray-700 mb-4">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        )}
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Rating: {avgRating}
        </h3>
      </div>
      {/*Catogeries accordions */}
      <div>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            isOpen={index === expand ? true : false}
            setExpand={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
