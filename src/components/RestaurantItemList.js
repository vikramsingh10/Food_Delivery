import React from "react";
import { MENU_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item?.card?.info?.id,
      name: item?.card?.info?.name,
      price:
        item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100,
    };
    dispatch(addItem(cartItem));
  };

  return (
    <div>
      <ul className="list-none p-0 m-0">
        {itemCards?.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center space-x-4 cursor-pointer transition duration-300">
            <div className="flex-1">
              <strong>{item?.card?.info?.name}</strong> - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
              <p className="text-gray-600 mt-1 w-3/4">
                {item?.card?.info?.description}
              </p>
            </div>
            {item?.card?.info?.imageId && (
              <div className="relative">
                <img
                  className="w-40 h-40 object-cover rounded-lg"
                  src={MENU_URL + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <button
                  onClick={() => handleAddToCart(item)}
                  className="absolute bottom-[-0.5rem] left-1/2 transform -translate-x-1/2 bg-white text-blue-600 hover:bg-gray-200 font-bold px-[25%] rounded-md border">
                  ADD
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantItemList;
