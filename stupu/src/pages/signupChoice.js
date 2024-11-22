import Nav from "layouts/Navigation";
import HeadContent from "components/header/HeadContent";
import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure react-router-dom is correctly imported
import "./SignUp.css";

const Home = () => {
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
    <>
      <div className="cstm-container">
        <Nav />
        <div className="SignUpChoice">
          <div className="cstm-container">
            <div className="sign-up flex mobile-direction-column justify-content-center">
              <HeadContent
                title="Bijles volgen"
                text="Voor studenten lager/middelbare school."
                buttonText1="Hoe?"
                onClickMore={handleStudentSignUp} // Trigger navigate on click
                buttonText2="Account Aanmaken"
                onClickAction={handleStudentSignUp} // Trigger navigate on click
                showButton={false} // Correctly set visibility for buttons
              />
              <HeadContent
                title="Bijles geven"
                text="Voor studenten lager/middelbare school."
                buttonText1="Hoe?"
                onClickMore={handleTutorSignUp} // Correct handler for this section
                buttonText2="Account Aanmaken"
                onClickAction={handleTutorSignUp} // Correct handler for this section
                showButton={false} // Ensure the button shows as intended
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
