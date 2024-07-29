import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import RestaurantItemList from "./RestaurantItemList";


const RestaurantCategory = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const hasNestedCategories = data?.categories?.length > 0;

  const isItemCategory =
    data?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const isNestedItemCategory =
    data?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer transition duration-300"
        onClick={toggleAccordion}>
        <span className="font-bold">
          {data.title} {isItemCategory && ` (${data?.itemCards?.length})`}
          {isNestedItemCategory && ` (${data?.categories?.length})`}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className="mt-2">
          {/* Render item cards if present */}
          {data?.itemCards && <RestaurantItemList itemCards={data.itemCards} />}

          {/* Render nested categories if present */}
          {hasNestedCategories &&
            data?.categories.map((nestedCategory, index) => (
              <RestaurantCategory key={index} data={nestedCategory} />
            ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
