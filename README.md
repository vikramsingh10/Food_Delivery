<<<<<<< HEAD

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# https://thingproxy.freeboard.io/fetch/

# "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

=======

# Food_Delivery

> > > > > > > b1c7bf37f5f4676cc2323183ea2faf4beaed944b

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

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
try {
const response = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json = await response.json();
console.log("Fetched Data: ", json);

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
I want to load more restaurants using lazy loading how can i Fetch more rstaurants ?
