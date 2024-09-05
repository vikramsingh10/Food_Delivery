import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import RestaurantItemList from "./RestaurantItemList";

const RestaurantCategory = ({ data, isOpen, setExpand }) => {
  const toggleAccordion = () => {
    setExpand();
  };

  const hasNestedCategories = data?.categories?.length > 0;

  const isItemCategory =
    data?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const isNestedItemCategory =
    data?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer transition duration-300"
        onClick={toggleAccordion}
      >
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
          {data?.itemCards && <RestaurantItemList itemCards={data.itemCards} />}
          {hasNestedCategories &&
            data?.categories.map((nestedCategory, index) => (
              <NestedCategoryContainer
                key={index}
                data={nestedCategory}
              />
            ))}
        </div>
      )}
    </div>
  );
};

const NestedCategoryContainer = ({ data }) => {
  const [expand, setExpand] = useState(null);

  return (
    <RestaurantCategory
      data={data}
      isOpen={expand !== null}
      setExpand={() => setExpand(expand === null ? true : null)}
    />
  );
};

export default RestaurantCategory;
