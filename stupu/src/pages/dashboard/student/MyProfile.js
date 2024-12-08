import React, { useState } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Button from "components/button/button2";
import ProfileInfo from "components/dashboard/ProfileInfo";
import PopUp from "components/popup/PopUp";
import Avatar from "assets/img/defaultprofile.webp";
import InputField from "components/inputs/InputField";
import TextareaField from "components/inputs/TextArea";
import Profile from "components/dashboard/Profile";
import "./MyProfile.css";
import PlusIcon from "components/button/PlusIcon";

const MyProfile = () => {
  useChangeBackground("/mijn-profiel", "#59b2a5");

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for storing selected image
  const [personalInfo] = useState({
    profileImage: { value: Avatar, type: "file" },
    name: { value: "John Doe", type: "text" },
    gender: { value: "Man", type: "radio", options: ["Man", "Vrouw", "Ander"] },
    birthDate: { value: "1998-04-06", type: "date" },
    phone: { value: "+3292538149", type: "tel" },
    email: { value: "school@example.com", type: "email" },
    address: { value: "123 Main St, 1000 City", type: "text" },
    hobbies: { value: "Voetbal", type: "text" },
    language: {
      value: "Nederlands",
      type: "options",
      options: ["Dutch", "English", "French", "German"],
    },
    favoriteCourse: {
      value: "Wiskunde",
      type: "options",
      options: ["Wiskunde", "Nederlands", "Engels", "Ander"],
    },
    school: { value: "Howest", type: "text" },
    education: {
      value: "Onderwijs",
      type: "options",
      options: ["Basisonderwijs", "Secundair Onderwijs", "Hoger Onderwijs"],
    },
    educationLevel: {
      value: "VWO",
      type: "options",
      options: ["Niet van toepassing", "VWO", "HAVO", "MBO", "HBO", "WO"],
    },
    studyDirection: { value: "Wiskunde", type: "text" },
    why: {
      value: "Ik volg bijles voor extra ondersteuning in wiskunde...",
      type: "textarea",
    },
  });

  const handleEditClick = () => {
    setPopUpVisible(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Update state with the image URL
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  const handleSave = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Convert formData to a plain object
    const updatedInfo = {};

    formData.forEach((value, key) => {
      if (key === "profileImage") {
        updatedInfo[key] = value;
      } else {
        updatedInfo[key] = value;
      }
    });

    // Make API request (POST) to send the form data to the backend
    const apiUrl = "https://your-api-endpoint.com/update-profile"; // Replace with your API endpoint
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data", // or 'application/json' if you are sending JSON
        // You can also add authorization headers if needed
      },
      body: updatedInfo,
    };

    console.log(updatedInfo);

    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Handle success response
        console.log("Profile updated successfully:", data);
        setPopUpVisible(false);
      })
      .catch((error) => {
        // Handle error response
        console.error("Error updating profile:", error);
      });
  };

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  const renderPopUp = () => {
    if (!isPopUpVisible) return null;
  
    return (
      <PopUp title="Bewerk Profiel" onClick={handleClosePopUp}>
        <form onSubmit={handleSave}>
          {Object.keys(personalInfo).map((key, index) => {
            const field = personalInfo[key];
            const uniqueId = `${key}-${index}`; // Unique ID using key and index
  
            switch (field.type) {
              case "file":
                return (
                  <div key={uniqueId} className="popup-field ptb-05">
                    <label
                      className="image-upload flex justify-content-center"
                      htmlFor={uniqueId} // Unique ID for the file input
                    >
                      {selectedImage && (
                        <div className="image-preview">
                          <img src={selectedImage} alt="Selected Preview" />
                        </div>
                      )}
                      <PlusIcon className="top-element" />
                    </label>
                    <input
                      type="file"
                      id={uniqueId}
                      name="profileImage"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                );
              case "text":
              case "tel":
              case "email":
              case "date":
                return (
                  <div key={uniqueId} className="popup-field ptb-05">
                    <InputField
                      id={uniqueId} // Unique ID for the input field
                      name={key}
                      type={field.type}
                      label={field.label || key}
                      defaultValue={field.value}
                      autoComplete={key}
                    />
                  </div>
                );
              case "radio":
                return (
                  <div key={uniqueId} className="popup-field ptb-05">
                    <span>{field.label || key}</span>
                    <div className="flex">
                      {field.options.map((option) => {
                        const optionId = `${uniqueId}-${option}`; // Unique ID for radio inputs
                        return (
                          <div className="p-1" key={optionId}>
                            <input
                              type="radio"
                              id={optionId}
                              name={key}
                              value={option}
                              defaultChecked={field.value === option}
                            />
                            <label htmlFor={optionId}>{option}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              case "options":
                return (
                  <div key={uniqueId} className="popup-field ptb-05">
                    <label htmlFor={uniqueId}>{field.label || key}</label>
                    <select id={uniqueId} name={key} defaultValue={field.value}>
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              case "textarea":
                return (
                  <div key={uniqueId} className="popup-field ptb-05">
                    <label htmlFor={uniqueId}>{field.label || key}</label>
                    <TextareaField
                      id={uniqueId} // Unique ID for textarea
                      name={key}
                      defaultValue={field.value}
                      autoComplete={key}
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
          <div className="popup-buttons">
            <Button className="mt-1" type="submit" text="Opslaan" />
            <Button className="mt-1" onClick={handleClosePopUp} text="Annuleer" />
          </div>
        </form>
      </PopUp>
    );
  };
  

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="title flex justify-content-center ptb-1">
        <h1>Mijn Profiel</h1>
      </div>
      <div className="flex-colomn align-items-center">
        <section className="Profile box box-border mt-2">
          <Profile
            profileImage={personalInfo.profileImage.value}
            name={personalInfo.name.value}
            onEditClick={handleEditClick}
          />
        </section>
        <section className="box box-transparent flex-colomn justify-content-center">
          <ProfileInfo title={"Contact gegevens"}>
            <ul>
              <li className="flex ptb-05">
                <div className="bold mr-1">Telefoon:</div>
                <div>{personalInfo.phone.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Email:</div>
                <div>{personalInfo.email.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Adres:</div>
                <div>{personalInfo.address.value}</div>
              </li>
            </ul>
          </ProfileInfo>
          <ProfileInfo title={"School gegevens"}>
            <ul>
              <li className="flex ptb-05">
                <div className="bold mr-1">School:</div>
                <div>{personalInfo.school.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Onderwijsvorm:</div>
                <div>{personalInfo.education.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Opleidingsrichting:</div>
                <div>{personalInfo.studyDirection.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Opleidingsniveau:</div>
                <div>{personalInfo.educationLevel.value}</div>
              </li>
            </ul>
          </ProfileInfo>
          <ProfileInfo title={"Waarom volg ik bijles"}>
            <p>{personalInfo.why.value}</p>
          </ProfileInfo>
        </section>
      </div>

      {renderPopUp()}
    </div>
  );
};

export default MyProfile;
