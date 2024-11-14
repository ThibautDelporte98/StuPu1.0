// src/pages/SignUpTutor.js
import React, { useRef } from "react";
import "../styles/LoginForm.css";
import "./SignUp.css";
import usePasswordToggler from "../hooks/usePasswordToggler";
import padlock from "../assets/img/padlock.png";
import padlockUnlock from "../assets/img/padlock-unlock.png";
import { useState } from "react";
import Button from "components/common/button/Button";
import UploadComponent from "components/UploadComponent";
import { handleImageChange, handleDeleteImage } from 'utils/uploadImage.js';


const SignUpTutor = ({
  firstName,
  lastName,
  email,
  password,
  phoneNo,
  birthDate,
  street,
  city,
  postalcode,
  course,
  school,
  studentNo,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setPhoneNo,
  setBirthDate,
  setStreet,
  setCity,
  setPostalcode,
  setCourse,
  setSchool,
  setStudentNo,
  onSubmit,
}) => {
  const { passwordType, togglePassword } = usePasswordToggler();

  const [selectedImageFront, setSelectedImageFront] = useState(null);
  const [imgFrontId, setImgFrontId] = useState("");
  const [selectedImageBack, setSelectedImageBack] = useState(null);
  const [imgBackId, setImgBackId] = useState("");

  const hiddenFileInputFront = useRef(null);
  const hiddenFileInputBack = useRef(null);


  const handleClickFront = () => {
    hiddenFileInputFront.current.click();
  };

  const handleClickBack = () => {
    hiddenFileInputBack.current.click();
  };


  return (
    <div className="login-box">
      <h1 className="title">Meld u aan!</h1>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="input">
          <label htmlFor="first_name">Voornaam</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Voornaam"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="last_name">Achternaam</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Achternaam"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="password">Wachtwoord</label>
          <input
            id="password"
            name="password"
            type={passwordType}
            value={password}
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="button" onClick={togglePassword}>
            <img
              src={passwordType === "password" ? padlock : padlockUnlock}
              alt={
                passwordType === "password" ? "Show Password" : "Hide Password"
              }
            />
          </button>
        </div>
        <div className="input">
          <label htmlFor="phone_no_">Telefoonnummer</label>
          <input
            type="tel"
            id="phone_no_"
            name="phone_no_"
            placeholder="Telefoonnummer"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="birth_date">Geboortedatum</label>
          <input
            type="text"
            id="birth_date"
            name="birth_date"
            placeholder="Geboortedatum"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="street">Straat + Nummer</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Straat + Nummer"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="city">Gemeente</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Gemeente"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="postalcode">Postcode</label>
          <input
            type="text"
            id="postalcode"
            name="postalcode"
            placeholder="Postcode"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="course">Opleiding</label>
          <input
            type="text"
            id="course"
            name="course"
            placeholder="Opleiding"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="student_no_">Studentennummer</label>
          <input
            type="text"
            id="student_no_"
            name="student_no_"
            placeholder="Studentennummer"
            value={studentNo}
            onChange={(e) => setStudentNo(e.target.value)}
            required
          />
        </div>
        <div className="upload">
        <UploadComponent
            label={"Voorkant ID toevoegen:"}
            handleClick={handleClickFront}
            handleImageChange={(event) =>
              handleImageChange(event, setSelectedImageFront, setImgFrontId)
            }
            handleDeleteImage={() =>
              handleDeleteImage(setSelectedImageFront, setImgFrontId, hiddenFileInputFront)
            }
            hiddenFileInput={hiddenFileInputFront}
            fileName={imgFrontId}
            selectedImage={selectedImageFront}
          />
          <UploadComponent
            label={"Achterkant ID toevoegen: "}
            handleClick={handleClickBack}
            handleImageChange={(event) =>
              handleImageChange(event, setSelectedImageBack, setImgBackId)
            }
            handleDeleteImage={() =>
              handleDeleteImage(setSelectedImageBack, setImgBackId, hiddenFileInputBack)
            }
            hiddenFileInput={hiddenFileInputBack}
            fileName={imgBackId}
            selectedImage={selectedImageBack}
          />
        </div>
        <Button type={"submit"} text={"Verzenden"} />
      </form>
    </div>
  );
};

export default SignUpTutor;
