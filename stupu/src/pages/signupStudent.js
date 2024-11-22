import { useState, useContext } from "react";
import { AuthContext } from "hooks/AuthContext";
import { FetchContext } from "hooks/FetchContext";
import Nav from "layouts/Navigation";
import Button from "components/common/button/Button";
import EmailVerification from "./EmailVerification";
import Loader from "components/common/loader/Loader";
import InputField from "components/common/inputs/InputField";
import PasswordInput from "components/common/inputs/PasswordInput";
import {
  isUsernameValid,
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

const Register = () => {
  // Fetch data
  const { authAxios } = useContext(FetchContext);
  const authContext = useContext(AuthContext);

  // input states
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [university, setUniversity] = useState("");
  const [major, setMajor] = useState("");

  // after submit states
  const [isLoading, setIsLoading] = useState(false);
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const zipCodeInt = parseInt(zipCode, 10);

    const payload = {
      userName: username,
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      street: street,
      municipality: municipality,
      zipCode: isNaN(zipCodeInt) ? 0 : zipCodeInt,
      birthPlace: birthPlace,
      birthDate: birthDate,
      university: university,
      major: major,
    };

    try {
      const response = await authAxios.post("/api/Auth/Register", payload);
      authContext.setAuthState(response.data);
      setSucces(true);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Registration failed. Please try again later.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
    console.log(payload)
  };

  return (
    <div className="Login">
      <div className="Login-header">
        <div className="cstm-container">
          <Nav />
          {succes ? (
            <EmailVerification />
          ) : (
            <div className="login-box">
              <h1 className="title">Registreer vandaag!</h1>
              <p className={error ? "error-message" : "hide-message"}>
                {error}
              </p>
              <form className="login-form" onSubmit={handleSubmit}>
                <InputField
                  id="username"
                  label="Gebruikersnaam"
                  value={username}
                  placeholder={"John123"}
                  onChange={(e) => setUsername(e.target.value)}
                  isValid={isUsernameValid(username)}
                  validationMessage="Moet 4 - 24 karakters bevatten."
                  showValidation={!!username}
                />
                <InputField
                  id="firstName"
                  label="Voornaam"
                  value={firstname}
                  placeholder={"John"}
                  onChange={(e) => setFirstname(e.target.value)}
                  isValid={isNameValid(firstname)}
                  validationMessage="Moet met een hoofdletter beginnen en mag geen spacies bevatten."
                  showValidation={!!firstname}
                />
                <InputField
                  id="lastName"
                  label="Achternaam"
                  value={lastname}
                  placeholder={"Doe"}
                  onChange={(e) => setLastname(e.target.value)}
                  isValid={isNameValid(lastname)}
                  validationMessage="Moet met een hoofdletter beginnen en mag geen spacies bevatten."
                  showValidation={!!lastname}
                />
                <InputField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  placeholder={"JohnDoe@outlook.be"}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={isEmailValid(email)}
                  validationMessage="Vul een geldig emailadres in."
                  showValidation={!!email}
                />
                <PasswordInput
                  id="password"
                  label="Wachtwoord"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isValid={isPasswordValid(password)}
                  validationMessage="Moet 8-24 karakters bevatten, min. 1 hoofdletter, kleine letters, een cijfer en een speciaal teken.(@$!%*?&) "
                  showValidation={!!password}
                />
                <PasswordInput
                  id="confirmPassword"
                  label="Bevestig Wachtwoord"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  isValid={isPasswordMatch(password, confirmPassword)}
                  validationMessage="Wachtwoorden komen niet overeen."
                  showValidation={!!confirmPassword}
                />
                <InputField
                  id="birthPlace"
                  label="Geboorteplaats"
                  value={birthPlace}
                  placeholder={"Mechelen"}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  isValid={isFieldValid(birthPlace)}
                  validationMessage="Geboorteplaats is verplicht."
                />
                <InputField
                  id="birthDate"
                  label="Geboortedatum"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  isValid={isBirthDateValid(birthDate)}
                  validationMessage="Je moet minimum 5 jaar zijn."
                  showValidation={!!birthDate}
                />
                <InputField
                  id="street"
                  label="Straat"
                  value={street}
                  placeholder={"Straatnaam + nummer"}
                  onChange={(e) => setStreet(e.target.value)}
                  isValid={isStreetValid(street)}
                  validationMessage="Straat mag niet leeg zijn."
                  showValidation={street.length > 0}
                />
                <InputField
                  id="zipCode"
                  label="Postcode"
                  type="number"
                  placeholder={"9999"}

                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  isValid={isZipCodeValid(zipCode)}
                  validationMessage="Postcode moet 4-5 cijfer lang zijn."
                  showValidation={zipCode.length > 0}
                />
                <InputField
                  id="municipality"
                  label="Gemeente"
                  value={municipality}
                  placeholder={"Kortrijk"}
                  onChange={(e) => setMunicipality(e.target.value)}
                  isValid={isFieldValid(municipality)}
                  validationMessage="Gemeente mag niet leeg zijn."
                  showValidation={municipality.length > 0}
                />
                <InputField
                  id="university"
                  label="School"
                  placeholder={"Mijn school"}
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                  isValid={isFieldValid(university)}
                  validationMessage="School is verplicht."
                  showValidation={university.length > 0}
                />
                <InputField
                  id="major"
                  label="Studierichting"
                  placeholder={"Mijn opleiding"}
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  isValid={isFieldValid(major)}
                  validationMessage="Studierichting is verplicht."
                  showValidation={major.length > 0}
                />
                <Button
                className={"mt-2"}
                  type="submit"
                  text="aanmelden"
                  disabled={
                    !isUsernameValid(username) ||
                    !isNameValid(firstname) ||
                    !isNameValid(lastname) ||
                    !isEmailValid(email) ||
                    !isPasswordValid(password) ||
                    !isPasswordMatch(password, confirmPassword) ||
                    !isStreetValid(street) ||
                    !isZipCodeValid(zipCode) ||
                    !isFieldValid(birthPlace) ||
                    !isBirthDateValid(birthDate) ||
                    !isFieldValid(municipality) ||
                    !isFieldValid(university) ||
                    !isFieldValid(major)
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
