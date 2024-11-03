import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "hooks/AuthContext";
import "./Navigation.css";
import Logo from "assets/img/logo.png";
import LoginAva from "assets/img/login-avatar.png";
import RegistrationIcon from "assets/img/registration.png";
import scrollToElement from "utils/scrollTo";
import Button from "components/common/Button";
import ProfileDropdown from "components/ProfileDropdown";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleScrollTo = (e, id) => scrollToElement(e, id, setIsOpen);
  const handleLoginClick = () => navigate("/aanmelden");
  const handleSignUpClick = () => navigate("/registratie");

  return (
    <nav className="navbar">
      <div className={`navbar-mobile ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a onClick={(e) => handleScrollTo(e, "hoewerktstupu")} href="#hoewerktstupu">
              Hoe werkt StuPu?
            </a>
          </li>
          <li>
            <a onClick={(e) => handleScrollTo(e, "hoe")} href="#hoe">
              Hoe meld ik mij aan?
            </a>
          </li>
          <li>
            <a onClick={(e) => handleScrollTo(e, "formulier")} href="#formulier">
              Schrijf je in!
            </a>
          </li>
          <li>
            <a onClick={(e) => handleScrollTo(e, "contact")} href="#contact">
              Contact & Socials
            </a>
          </li>
          <div className="flex">
            {isAuthenticated ? (
              <ProfileDropdown />
            ) : (
              <>
                <li>
                  <Button
                    className="custom-button button-login button-mobile"
                    type="button"
                    text="aanmelden"
                    onClick={handleLoginClick}
                    icon={LoginAva}
                  />
                </li>
                <li>
                  <Button
                    className="custom-button button-registration button-mobile"
                    type="button"
                    text="registreer"
                    onClick={handleSignUpClick}
                    icon={RegistrationIcon}
                  />
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
      <div className="navbar-flex">
        <div className="navbar-links flex">
          <div className="navbar-logo">
            <a href="/">
              <img src={Logo} alt="Logo StuPu" />
            </a>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a onClick={(e) => handleScrollTo(e, "hoewerktstupu")} href="word-lesvolger">
                  Word Lesvolger!
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScrollTo(e, "hoe")} href="#hoe">
                  Word Lesgever
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScrollTo(e, "formulier")} href="word-lesgever">
                  Bijles zoeken
                </a>
              </li>
              <li>
                <a onClick={(e) => handleScrollTo(e, "contact")} href="#contact">
                  Contact & Socials
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-signup flex">
        {isAuthenticated ? (  // Check if the user is authenticated
    <ProfileDropdown />  // Show the dropdown if authenticated
  ) : (  // If not authenticated
    <>
      <Button
        className="custom-button button-login button-desktop m-05"
        type="button"
        text="aanmelden"
        onClick={handleLoginClick}
        icon={LoginAva}
      />
      <Button
        className="custom-button button-registration button-choiceSec button-desktop m05"
        type="button"
        text="registreer"
        onClick={handleSignUpClick}
        icon={RegistrationIcon}
      />
    </>
  )}
        </div>
        <div className="navbar-toggle">
          <div className="navbar-ham" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
