import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

// console.log("Body Rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log("Fetched Data: ", json);

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Ensure loading state is updated
    }
  };

  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-red-600 text-center text-2xl mt-4">
        Looks like you are offline! Please check your internet connection!!
      </h1>
    );
  }

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex justify-center items-center mb-4 gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg p-2 w-full max-w-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200">
            Search
          </button>
        </div>
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200"
          onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-start gap-4 ml-10">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard key={res.info.id} resData={res.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
