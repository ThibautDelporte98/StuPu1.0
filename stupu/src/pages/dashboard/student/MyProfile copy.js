import React, { useState } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Button from "components/button/button2";
import ProfileInfo from "components/dashboard/ProfileInfo";
import "./MyProfile.css";
import PopUp from "components/popup/PopUp";
import Avatar from "assets/img/defaultprofile.webp";
import InputField from "components/inputs/InputField";
import TextareaField from "components/inputs/TextArea";
import Profile from "components/dashboard/Profile";

const MyProfile = () => {
  useChangeBackground("/mijn-profiel", "#59b2a5");

  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    profileImage: Avatar,
    name: { value: "John Doe", type: "text" },
    gender: { value: "Man", type: "radio", options: ["Man", "Vrouw", "Ander"] },
    birthDate: { value: "1998-04-06", type: "date" },
    phone: { value: "+3292538149", type: "tel" },
    email: { value: "school@example.com", type: "text" },
    address: { value: "123 Main St, 1000 City", type: "text" },
    hobbies: { value: "Voetbal", type: "text" },
    language: { value: "Nederlands", type: "options", options: ["Dutch", "English", "French", "German"] },
    favoriteCourse: { value: "Wiskunde", type: "options", options: ["Wiskunde", "Nederlands", "Engels", "Ander"] },
    school: { value: "Howest", type: "text" },
    education: { value: "Onderwijs", type: "options", options: ["Basisonderwijs", "Secundair Onderwijs", "Hoger Onderwijs"] },
    educationLevel: { value: "VWO", type: "options", options: ["VWO", "HAVO", "MBO", "HBO", "WO"] },
    studyDirection: { value: "Wiskunde", type: "text" },
    why: { value: "Ik volg bijles voor extra ondersteuning in wiskunde binnen mijn TSO-opleiding Houtbewerking. Mijn doel is om beter te worden in rekenvaardigheden die ik nodig heb voor mijn vakken en toekomstige werk.", type: "textarea" },
  });

  const handleEditClick = () => {
    setPopUpVisible(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedInfo = {};
    let isDateValid = true;
  
    new FormData(event.target).forEach((value, key) => {
      if (personalInfo[key]) {
        if (key === "birthDate") {
          const date = new Date(value);
          if (isNaN(date.getTime())) {
            alert("Invalid date. Please use the format YYYY-MM-DD.");
            isDateValid = false;
          }
        }
        updatedInfo[key] = { ...personalInfo[key], value };
      }
    });
  
    if (isDateValid) {
      setPersonalInfo({ ...personalInfo, ...updatedInfo });
      setPopUpVisible(false);
    }
  };
  

  const handleClosePopUp = () => {
    setPopUpVisible(false);
  };

  const renderPopUp = () => {
    if (!isPopUpVisible) return null;

    return (
      <PopUp title="Bewerk Profiel">
        <form onSubmit={handleSave}>
          {Object.keys(personalInfo).map((key) => {
            const field = personalInfo[key];
            switch (field.type) {
              case "text":
              case "tel":
              case "email":
              case "date":
                return (
                  <div key={key} className="popup-field">
                    <InputField
                      id={key}
                      label={key}
                      name={key}
                      defaultValue={field.value}
                    />
                  </div>
                );
              case "radio":
                return (
                  <div key={key} className="popup-field">
                    <label>{key}</label>
                    {field.options.map((option) => (
                      <label key={option}>
                        <input
                          type="radio"
                          name={key}
                          value={option}
                          defaultChecked={field.value === option}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                );
              case "options":
                return (
                  <div key={key} className="popup-field">
                    <label>{key}</label>
                    <select name={key} defaultValue={field.value}>
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
                  <div key={key} className="popup-field">
                    <TextareaField
                      id={key}
                      label={key}
                      name={key}
                      defaultValue={field.value}
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
          <div className="popup-buttons">
            <Button className="mt-1" type="submit" text="Opslaan" />
            <Button
              className="mt-1"
              onClick={handleClosePopUp}
              text="Annuleer"
            />
          </div>
        </form>
      </PopUp>
    );
  };

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="box-top">
        <h1>Mijn Profiel</h1>
      </div>
      <div className="grid-overview">
        <section className="Profile box box-border box-2">
          <Profile
            profileImage={personalInfo.profileImage}
            name={personalInfo.name.value}
            gender={personalInfo.gender.value}
            birthDate={personalInfo.birthDate.value}
            language={personalInfo.language.value}
            hobby={personalInfo.hobbies.value}
            favoriteCourse={personalInfo.favoriteCourse.value}
            onEditClick={handleEditClick}
          />
        </section>
        <section className="box box-transparent box-3 flex-colomn justify-content-center">
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
                <div className="bold mr-1">
                  adres (straat + nummer , postcode stad):
                </div>
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
                <div className="bold mr-1">Niveau:</div>
                <div>{personalInfo.educationLevel.value}</div>
              </li>
              <li className="flex ptb-05">
                <div className="bold mr-1">Studierichting:</div>
                <div>{personalInfo.studyDirection.value}</div>
              </li>
            </ul>
          </ProfileInfo>
          <ProfileInfo title={"School gegevens"}>
            <p>{personalInfo.why.value}</p>
          </ProfileInfo>
        </section>

        <div className="box-6 flex-colomnn align-items-end box-support p-2">
          <h2>Hulp nodig?</h2>
          <div className="ptb-1">
            Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a>{" "}
          </div>
          <div>
            Email: <a href="mailto:info@stupu.be">info@stupu.be</a>{" "}
          </div>
        </div>
      </div>
      {renderPopUp()}
    </div>
  );
};

export default MyProfile;
