import React from "react";
import "./Loader.css";
import useLockBodyScroll from "hooks/useLockBodyScroll";

const Loader = () => {

useLockBodyScroll(true);

  return (
    <div className="Loader">
      <div className="overlay-container">
        <span className="loader"></span>
      </div>
    </div>
  );


};

export default Loader;
