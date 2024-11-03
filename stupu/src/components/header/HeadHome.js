import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import bg from "assets/img/stupu-header.png";
import "./HeaderHome.css";
import HeadContent from "./HeadContent";

const Head = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle button click for student sign-up
  const handleStudentInfo = () => {
    navigate("/word-lesvolger"); // Redirect to the student sign-up path
  };

  const handleTutorInfo = () => {
    navigate("/zoek-bijles"); // Redirect to the student sign-up path
  };

  // Function to handle button click for tutor sign-up
  const handleStudentSignUp = () => {
    navigate("/registratie-lesvolger "); // Redirect to the tutor sign-up path
  };

    // Function to handle button click for tutor sign-up
    const handleTutorSignUp = () => {
      navigate("/registratie-lesgever "); // Redirect to the tutor sign-up path
    };

  return (
    <header className="head-home">
      <div className="bg-head">
        <img src={bg} alt="" />
      </div>
      <div className="head-content">
        <HeadContent
          title="Bijles volgen"
          text="Voor studenten lager/middelbare school."
          buttonText1="Hoe?"
          onClickMore={handleStudentInfo}
          buttonText2="Zoek bijles"
          onClickAction={handleStudentSignUp}
        />
                <HeadContent
          title="Bijles geven"
          text="Door studenten lerarenopleiding."
          buttonText1="Hoe?"
          onClickMore={handleTutorInfo}
          buttonText2="Registreer"
          onClickAction={handleTutorSignUp}
        />
      </div>
    </header>
  );
};

export default Head;
