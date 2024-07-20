import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchData();
  }, [resID]);

  return resInfo;
};

export default useRestaurantMenu;
