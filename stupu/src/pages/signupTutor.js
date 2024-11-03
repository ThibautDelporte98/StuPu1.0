// src/pages/Login.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { publicFetch } from "../utils/fetch";
import SignUpForm from "../layouts/SignUpTutor";
import Nav from "layouts/Navigation";

const Login = () => {
  const authContext = useContext(AuthContext);

  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const role = "tutor";

  const submitCredentials = async (e) => {
    e.preventDefault();

    // Gather form data
    const credentials = {
      firstName,
      lastName,
      email,
      phoneNo,
      birthDate,
      street,
      city,
      postalcode,
      course,
      school,
      studentNo,
      password,
      role,
    };

    try {
      const { data } = await publicFetch.post("/signup", credentials); // Adjust the endpoint to match your backend route
      authContext.setAuthState(data); // Update auth context state with response data
      console.log("User signed up successfully");
    } catch (error) {
      setLoginError(error.response?.data?.message || "Sign-up failed");
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="cstm-container">
      <Nav />
      <div className="Login">
        <div className="Login-header">
          {loginError && <p className="error">{loginError}</p>}
          <SignUpForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNo={phoneNo}
            birthDate={birthDate}
            street={street}
            city={city}
            postalcode={postalcode}
            course={course}
            school={school}
            studentNo={studentNo}
            password={password}
            privacyChecked={privacyChecked}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhoneNo={setPhoneNo}
            setBirthDate={setBirthDate}
            setStreet={setStreet}
            setCity={setCity}
            setPostalcode={setPostalcode}
            setCourse={setCourse}
            setSchool={setSchool}
            setStudentNo={setStudentNo}
            setPassword={setPassword}
            setPrivacyChecked={setPrivacyChecked}
            onSubmit={submitCredentials}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
