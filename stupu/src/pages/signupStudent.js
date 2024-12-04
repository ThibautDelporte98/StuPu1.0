import { useState } from "react";
import Nav from "layouts/Navigation";
import Button from "components/button/Button";
import EmailVerification from "./EmailVerification";
import Loader from "components/loader/Loader";
import InputField from "components/inputs/InputField";
import PasswordInput from "components/inputs/PasswordInput";
import {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isPasswordMatch,
  isStreetValid,
  isZipCodeValid,
  isBirthDateValid,
  isFieldValid,
} from "utils/validations";
import { Link } from "react-router-dom";
import "./SignUp.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    street: "",
    municipality: "",
    zipCode: "",
    birthPlace: "",
    birthDate: "", // Date string in 'YYYY-MM-DD' format
    university: "",
    major: "",
  });
  const [redirectEmail, setRedirectEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    formData.zipCode = Number(formData.zipCode);

    console.log("Payload:", JSON.stringify(formData, null, 2)); // Pretty print the payload

    try {
      const response = await fetch(
        "https://stupu-webapp.azurewebsites.net/api/Auth/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const textResponse = await response.text();
        console.error("API Error Response:", textResponse);
        throw new Error(textResponse || "Registration failed");
        
      }

      setSucces(true)
      setRedirectEmail(formData.email);  

    } catch (error) {
      setError("Registration failed:", error.message);
      alert(`Registration failed: ${error.message || "Please try again"}`);
    }
  };

  return (
    <div className="Login">
      <div className="Login-header">
        <div className="cstm-container">
          <Nav />
          {succes ? (
            <EmailVerification  email={redirectEmail}/>
          ) : (
            <div className="login-box register-box">
              <h1 className="title">Registreer vandaag!</h1>
              <p className={error ? "error-message" : "hide-message"}>
                {error}
              </p>
              <form className="login-form" onSubmit={handleSubmit} method="POST" >
                <InputField
                  id="firstName"
                  label="Voornaam"
                  uniqueName={"firstName"}
                  value={formData.firstName}
                  placeholder={"John"}
                  onChange={handleChange}                 
                  isValid={isNameValid(formData.firstName)}
                  validationMessage="Moet met een hoofdletter beginnen en mag geen spacies bevatten."
                  showValidation={!!formData.firstName}
                />
                <InputField
                  id="lastName"
                  label="Achternaam"
                  uniqueName={"lastName"}
                  value={formData.lastName}
                  placeholder={"Doe"}
                  onChange={handleChange}
                  isValid={isNameValid(formData.lastName)}
                  validationMessage="Moet met een hoofdletter beginnen en mag geen spacies bevatten."
                  showValidation={!!formData.lastName}
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  uniqueName={"email"}

                  value={formData.email}
                  placeholder={"JohnDoe@outlook.be"}
                  onChange={handleChange}
                  isValid={isEmailValid(formData.email)}
                  validationMessage="Vul een geldig emailadres in."
                  showValidation={!!formData.email}
                  autoComplete="username@domain.com"
                />
                <PasswordInput
                  id="password"
                  label="Wachtwoord"
                  uniqueName={"password"}
                  value={formData.password}
                  onChange={handleChange}
                  isValid={isPasswordValid(formData.password)}
                  validationMessage="Moet 8-24 karakters bevatten, min. 1 hoofdletter, kleine letters, een cijfer en een speciaal teken.(@$!%*?&) "
                  showValidation={!!formData.password}
                  autoComplete="new-password"
                />
                <PasswordInput
                  id="confirmPassword"
                  label="Bevestig Wachtwoord"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  isValid={isPasswordMatch(formData.password, confirmPassword)}
                  validationMessage="Wachtwoorden komen niet overeen."
                  showValidation={!!confirmPassword}
                  autoComplete="new-password"

                />
                <InputField
                  id="birthPlace"
                  label="Geboorteplaats"
                  uniqueName={"birthPlace"}
                  value={formData.birthPlace}
                  placeholder={"Mechelen"}
                  onChange={handleChange}
                  isValid={isFieldValid(formData.birthPlace)}
                  validationMessage="Geboorteplaats is verplicht."
                />
                <InputField
                  id="birthDate"
                  label="Geboortedatum"
                  uniqueName={"birthDate"}
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  isValid={isBirthDateValid(formData.birthDate)}
                  validationMessage="Je moet minimum 5 jaar zijn."
                  showValidation={!!formData.birthDate}
                />
                <InputField
                  id="street"
                  label="Straat"
                  uniqueName={"street"}

                  value={formData.street}
                  placeholder={"Straatnaam + nummer"}
                  onChange={handleChange}
                  isValid={isStreetValid(formData.street)}
                  validationMessage="Straat mag niet leeg zijn."
                  showValidation={formData.street.length > 0}
                />
                <InputField
                  id="zipCode"
                  label="Postcode"
                  type="number"
                  uniqueName={"zipCode"}

                  placeholder={"9999"}
                  value={formData.zipCode}
                  onChange={handleChange}
                  isValid={isZipCodeValid(formData.zipCode)}
                  validationMessage="Postcode moet 4-5 cijfer lang zijn."
                  showValidation={formData.zipCode.length > 0}
                />
                <InputField
                  id="municipality"
                  label="Gemeente"
                  uniqueName={"municipality"}
                  value={formData.municipality}
                  placeholder={"Kortrijk"}
                  onChange={handleChange}
                  isValid={isFieldValid(formData.municipality)}
                  validationMessage="Gemeente mag niet leeg zijn."
                  showValidation={formData.municipality.length > 0}
                />
                <InputField
                  id="university"
                  label="School"
                  uniqueName={"university"}
                  placeholder={"Mijn school"}
                  value={formData.university}
                  onChange={handleChange}
                  isValid={isFieldValid(formData.university)}
                  validationMessage="School is verplicht."
                  showValidation={formData.university.length > 0}
                />
                <InputField
                  id="major"
                  label="Studierichting"
                  placeholder={"Mijn opleiding"}
                  uniqueName={"major"}
                  value={formData.major}
                  onChange={handleChange}
                  isValid={isFieldValid(formData.major)}
                  validationMessage="Studierichting is verplicht."
                  showValidation={formData.major.length > 0}
                />
                <Button
                className={"mt-2"}
                  type="submit"
                  text="aanmelden"
                  disabled={
                    !isNameValid(formData.firstName) ||
                    !isNameValid(formData.lastName) ||
                    !isEmailValid(formData.email) ||
                    !isPasswordValid(formData.password) ||
                    !isPasswordMatch(formData.password, confirmPassword) ||
                    !isStreetValid(formData.street) ||
                    !isZipCodeValid(formData.zipCode) ||
                    !isFieldValid(formData.birthPlace) ||
                    !isBirthDateValid(formData.birthDate) ||
                    !isFieldValid(formData.municipality) ||
                    !isFieldValid(formData.university) ||
                    !isFieldValid(formData.major)
                  }
                />

                {isLoading ? <Loader /> : ""}
              </form>
              <p>Heb je al een account?</p>
              <Link to={"/aanmelden"}>Log in</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
