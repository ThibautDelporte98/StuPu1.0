import React, { useState } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Button from "components/button/button2";
import EditableIcon from "components/button/EditIcon";
import ProfileImage from "components/dashboard/ProfileHeader";
import ProfileInfo from "components/dashboard/ProfileInfo";
import Verified from "assets/img/verified.png";
import "./MyProfile.css";
import PopUp from "components/popup/PopUp";
import InputField from "components/inputs/InputField";
import TextareaField from "components/inputs/TextArea";

const LessonDetail = () => {
  useChangeBackground("/mijn-profiel", "#59b2a5");

  // State to manage popup visibility and selected information
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [selectedField, setSelectedField] = useState([]);
  const [personalInfo, setPersonalInfo] = useState([
    { label: "Geslacht", value: "Man", type:"options" , options: ["Man", "Vrouw", "Anders"] },
    { label: "Geboortedatum", value: "2000-11-01", type:"date" },
    { label: "Hobbies", value: "Voetbal, lezen", type:"text" },
    { label: "Talenkennis", value: "Nederlands, Engels" , type:"options" , options: ["Nederlands", "Engels", "Frans", "Duits"] },
    { label: "Lievelingsvak", value: "Wiskunde" , type:"options", options: ["Nederlands", "Wiskunde", "Engels", "ander"] },
  ]);
  
  const [contactDetails, setContactDetails] = useState([
    { label: "Telefoon", value: "123-456-789" , type:"text" },
    { label: "Email", value: "johndoe@example.com", type:"text" },
    { label: "Adres", value: "Straatnaam 123, Stad", type:"text" },
  ]);

  const [schoolDetails , setSchoolDetails] = useState([
    { label: "School", value: "School X" , type:"text" },
    { label: "Onderwijsvorm", value: "TSO"  , type:"options", options: ["Middelbaar", "Lagerschool", "Bijzonder onderwijs", "ander"] },
    { label: "Onderwijs Niveau", value: "Niveau Y", type:"options", options: ["TSO", "ASO", "Latijn", "ander"] },
    { label: "Studierichting", value: "Houtbewerking" , type:"text"},
  ]);

  const [reason, setReason] = useState(
    {
      value:"Ik volg bijles voor extra ondersteuning in wiskunde binnen mijn TSO-opleiding Houtbewerking. Mijn doel is om beter te worden in rekenvaardigheden die ik nodig heb voor mijn vakken en toekomstige werk.",
      type:"textarea"
    }
  )

  // Handlers
const handleEditClick = (field) => {
  if (Array.isArray(field)) {
    setSelectedField(field);
  } else {
    setSelectedField([field]); // Wrap non-array fields into an array to maintain consistency
  }
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
    else if (schoolDetails.some((field) => field.label === firstLabel)) {
      setSchoolDetails(updatedFields);
    }
    else if (selectedField[0].value !== undefined) { // Check if the field is related to "reason"
      setReason({ ...reason, value: updatedFields[0].value }); // Update the "text" property
    }
    setPopUpVisible(false);
  };


  const handleClosePopUp = () => {
    setPopUpVisible(false);
    setSelectedField(null);
  };


  const renderPopUp = () => {
    if (!isPopUpVisible || !selectedField) return null;

    return (
      <PopUp title="Bewerk Profiel">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const updatedFields = selectedField.map((field, index) => ({
              ...field,
              value: e.target.elements[index].value,
            }));
            handleSave(updatedFields);
          }}
        >
          {selectedField.map((field, index) => (
            <div key={index} className="popup-field">
              {field.type === "text" && (
                <InputField id="text-field" label={field.label} defaultValue={field.value} />
              )}
              {field.type === "options" && (
              <div>
                <label>{field.label}</label>
                <select id="select-field" defaultValue={field.value} name={field.label}>
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
              {field.type === "date" && (
              <div>
                <InputField
                  id="date-field"
                  label={field.label}
                  defaultValue={field.value}
                  type="date"
                />
              </div>
            )}
              {field.type === "textarea" && (
                <TextareaField className={"mt-1"}  defaultValue={field.value}/>
              )}
            </div>
          ))}
          <div className="popup-buttons">
            <Button className={"mt-1"} type="submit" text="Opslaan" />
            <Button className={"mt-1"} onClick={handleClosePopUp} text="Annuleer" />
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
        <section className="box box-border box-2">
          <div className="flex justify-content-end">
            <Button
              className="button-edit"
              icon={<EditableIcon />}
              onClick={() => handleEditClick(personalInfo)}
            />
          </div>
          <ProfileImage lessonsCount={12} />
          <div className="mt-2">
            <div className="name mt-1">
              Dhr. John Doe
              <span className="verified">
                <img className="verified-img" src={Verified} alt="default" />
              </span>
            </div>
            <ProfileInfo
              title="Persoonlijke informatie"
              infoList={personalInfo}
            />
          </div>
        </section>
        <section className="box box-transparent box-3 flex-colomn justify-content-center ">
        <div className=" ptb-1">
            <div className="box-edit  flex">
              <h2>Contact gegevens:</h2>
              <Button
                className="button-edit"
                icon={<EditableIcon strokeColor="white" />}
                onClick={() => handleEditClick(contactDetails)} 
              />
            </div>
            <ProfileInfo title="Contactgegevens" infoList={contactDetails} />
          </div>
          <div className=" ptb-1">
            <div className="box-edit  flex">
              <h2>School gegevens:</h2>
              <Button
                className="button-edit"
                icon={<EditableIcon strokeColor="white" />}
                onClick={() => handleEditClick(schoolDetails)} 
              />
            </div>
            <ProfileInfo title="School gegevens" infoList={schoolDetails} />
          </div>

          <div className="ptb-1">
            <div className="box-edit  flex">
              <h2>Waarom volg ik bijles?</h2>
              <Button
                className="button-edit"
                icon={<EditableIcon strokeColor="white" />}
                onClick={() => handleEditClick(reason)} 
              />
            </div>
            <p>
              {reason.value}
            </p>
          </div>
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

export default LessonDetail;
