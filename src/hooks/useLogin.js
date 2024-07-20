import { useState } from "react";

export const useLogin = () => {
  const [btnName, setbtnName] = useState("Login");

  const onClick = () => {
    setbtnName((prevName) => (prevName === "Login" ? "Logout" : "Login"));
  };
  return {
    onClick,
    btnName,
  };
};
