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
  const [isTopRated, setIsTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filteredList = listOfRestaurants;

    if (searchText) {
      filteredList = filteredList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (isTopRated) {
      filteredList = filteredList.filter((res) => res.info.avgRating > 4);
    }

    setFilteredRestaurant(filteredList);
  }, [searchText, listOfRestaurants, isTopRated]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterToggle = () => {
    setIsTopRated((prev) => !prev);
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
        </div>
        <button
          className={`rounded-lg px-4 py-2 transition duration-200 ${isTopRated ? 'bg-green-600' : 'bg-green-500'} text-white`}
          onClick={handleFilterToggle}>
          {isTopRated ? 'Show All Restaurants' : 'Top Rated Restaurants'}
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
