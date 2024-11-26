


import React, {useState} from "react";
import "./PopUp.css";
import useLockBodyScroll from "hooks/useLockBodyScroll";
import Button from "components/button/button2";

const PopUp = ({ title, onSubmit, children }) => {
const [selectedField, setSelectedField] = useState([]);
useLockBodyScroll(true);


  const handleEditClick = (field) => {
    setSelectedField(field);
    setPopUpVisible(true);
  };


  
  const handleSave = (updatedFields) => {
    // Determine which section to update
    const firstLabel = updatedFields[0].label;
    if (personalInfo.some((field) => field.label === firstLabel)) {
      setPersonalInfo(updatedFields);
    } else if (contactDetails.some((field) => field.label === firstLabel)) {
      setContactDetails(updatedFields);
    }
    setPopUpVisible(false);
  };


  const handleClosePopUp = () => {
    setPopUpVisible(false);
    setSelectedField(null);
  };


  return (
    <div className="PopUp">
      <div className="overlay-container-2">
        <div className="popup">
          <h1>{title}</h1>
          <form onSubmit={onSubmit}>{children}</form>
          <Button type={"submit"} text={"Opslaan"} />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
