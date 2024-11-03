import HeadContent from "components/header/HeadContent";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUp.css";

const SignUpChoice = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click for student sign-up
  const handleStudentSignUp = () => {
    navigate("/registratie-lesvolger"); // Redirect to the student sign-up path
  };

  // Function to handle button click for tutor sign-up
  const handleTutorSignUp = () => {
    navigate("/registratie-lesgever"); // Redirect to the tutor sign-up path
  };

  return (
    <div className="SignUpChoice">
      <div className="cstm-container">
        <div className="sign-up flex mobile-direction-column justify-content-center">
          <HeadContent
            title="Bijles volgen"
            text="Voor studenten lager/middelbare school."
            buttonText1="Hoe?"
            onClickMore={handleStudentSignUp}
            buttonText2="Account Aanmaken"
            onClickAction={handleStudentSignUp}
            showButton={false} 
          />
          <HeadContent
            title="Bijles geven"
            text="Voor studenten lager/middelbare school."
            buttonText1="Hoe?"
            onClickMore={handleStudentSignUp}
            buttonText2="Account Aanmaken"
            onClickAction={handleTutorSignUp}
            showButton={false} 
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpChoice;
