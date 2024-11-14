// HeadContent.js
import React from "react";
import Button from "components/common/button/Button";
import "./HeaderHome.css";

const HeadContent = ({ title, text, className, buttonText1, buttonText2, onClickMore, onClickAction, showButton = true }) => {
  return (
    <div className="block">
      <div className="block-description">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="flex">
        {showButton && ( // Render only if showButton1 is not explicitly false
          <Button
            className="custom-button"
            type="button"
            text={buttonText1}
            onClick={onClickMore}
          />
        )}
        <Button
          className="custom-button-login button-choiceSec"
          type="button"
          text={buttonText2}
          onClick={onClickAction}
        />
      </div>
    </div>
  );
};

export default HeadContent;
