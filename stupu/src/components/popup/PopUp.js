import React from "react";
import "./PopUp.css";
import useLockBodyScroll from "hooks/useLockBodyScroll";
import Button from "components/button/button2";
import CloseIcon from "components/button/CloseIcon";

const PopUp = ({title, children, onClick}) => {

useLockBodyScroll(true);

  return (
    <div className="PopUp">
      <div className="overlay-container-2">
        <div className="popup box-shadow">
        <div className="popup-elements flex space-between">
        <h2>{title}</h2>          
          <Button
              className="button-delete sticky-element"
              onClick={onClick}
              icon={<CloseIcon />}

            />
        </div>
            
            {children}
        </div>
      </div>
    </div>
  );


};

export default PopUp;
