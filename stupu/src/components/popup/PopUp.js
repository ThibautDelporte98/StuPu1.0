import React from "react";
import "./PopUp.css";
import useLockBodyScroll from "hooks/useLockBodyScroll";

const PopUp = ({title, children}) => {

useLockBodyScroll(true);

  return (
    <div className="PopUp">
      <div className="overlay-container-2">
        <div className="popup box-shadow">
            <h1>{title}</h1>
            {children}
        </div>
      </div>
    </div>
  );


};

export default PopUp;
