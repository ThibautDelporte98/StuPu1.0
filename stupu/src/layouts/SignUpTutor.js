// src/pages/SignUpTutor.js
import React from "react";
import "../styles/LoginForm.css";
import usePasswordToggler from "../hooks/usePasswordToggler";
import padlock from "../assets/img/padlock.png";
import padlockUnlock from "../assets/img/padlock-unlock.png";

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
  role
}) => {
  const { passwordType, togglePassword } = usePasswordToggler();

  return (
    <section id="formulier">
      <form className="sign-up-form" onSubmit={onSubmit} noValidate>
        <h3>Persoonsgegevens:</h3>
        <div>
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
        <div>
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
        <div>
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
            <label>Password:</label>
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
                  passwordType === "password"
                    ? "Show Password"
                    : "Hide Password"
                }
              />
            </button>
          </div>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
          <div>
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
        <div>
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
        <div>
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
          <div>
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
        <button type="submit">Verzenden</button>
      </form>
    </section>
  );
};

export default SignUpTutor;
