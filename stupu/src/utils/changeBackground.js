// utils/changeBackground.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useChangeBackground = (targetPath, backgroundColor) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === targetPath) {
      document.body.classList.add("background-transition");
      document.body.style.backgroundColor = backgroundColor;
    } else {
      document.body.classList.remove("background-transition");
      document.body.style.backgroundColor = "";
    }

    // Clean up the style when the component unmounts or route changes
    return () => {
      document.body.classList.remove("background-transition");
      document.body.style.backgroundColor = "";
    };
  }, [location, targetPath, backgroundColor]);
};

export default useChangeBackground;
