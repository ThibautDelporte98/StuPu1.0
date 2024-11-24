import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link here
import { AuthContext } from "hooks/AuthContext";
import useLockBodyScroll from "hooks/useLockBodyScroll";
import "./Navigation.css";
import Logo from "assets/img/logo.png";
import scrollToElement from "utils/scrollTo";
import Button from "components/common/button/Button";
import ProfileDropdown from "components/ProfileDropdown";
import SearchInput from "components/common/SearchInput";
import Login from "assets/img/login-avatar.svg";
import SignUp from "assets/img/registration.svg"

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleScrollTo = (e, id) => scrollToElement(e, id, setIsOpen);
  const handleLoginClick = () => navigate("/aanmelden");
  const handleSignUpClick = () => navigate("/registratie");
  const handleHomeClick = () => navigate("/");

  useLockBodyScroll(isOpen);

  return (
    <nav className="navbar">
      {isAuthenticated() ? (  
        <></>
      ) : (
        <div className={`navbar-mobile ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="#hoewerktstupu" // Replace href with to
                onClick={(e) => handleScrollTo(e, "hoewerktstupu")}
              >
                Hoe werkt StuPu?
              </Link>
            </li>
            <li>
              <Link
                to="#hoe" // Replace href with to
                onClick={(e) => handleScrollTo(e, "hoe")}
              >
                Hoe meld ik mij aan?
              </Link>
            </li>
            <li>
              <Link
                to="#formulier" // Replace href with to
                onClick={(e) => handleScrollTo(e, "formulier")}
              >
                Schrijf je in!
              </Link>
            </li>
            <li>
              <Link
                to="#contact" // Replace href with to
                onClick={(e) => handleScrollTo(e, "contact")}
              >
                Contact & Socials
              </Link>
            </li>
            <div className="flex">
              <li>
                <Button
                  className="custom-button button-login button-mobile"
                  type="button"
                  text="aanmelden"
                  onClick={handleLoginClick}
                  icon={Login}

                />
              </li>
              <li>
                <Button
                  className="custom-button button-registration button-mobile"
                  type="button"
                  text="registreer"
                  onClick={handleSignUpClick}
                  icon={SignUp}
                />
              </li>
            </div>
          </ul>
        </div>
      )}

      <div className="navbar-flex">
        <div className="navbar-links flex">
          <div className="navbar-logo">
            <Link to="/" onClick={handleHomeClick}> {/* Replace a with Link */}
              <img src={Logo} alt="Logo StuPu" />
            </Link>
          </div>
          <div className="navbar-menu">
            {isAuthenticated() ? (  // Call isAuthenticated as a function
              <SearchInput />
            ) : (
              <ul className="navbar-desktop">
                <li>
                  <Link
                    to="#hoewerktstupu" // Replace href with to
                    onClick={(e) => handleScrollTo(e, "hoewerktstupu")}
                  >
                    Word Lesvolger!
                  </Link>
                </li>
                <li>
                  <Link
                    to="#hoe" // Replace href with to
                    onClick={(e) => handleScrollTo(e, "hoe")}
                  >
                    Word Lesgever
                  </Link>
                </li>
                <li>
                  <Link
                    to="#formulier" // Replace href with to
                    onClick={(e) => handleScrollTo(e, "formulier")}
                  >
                    Bijles zoeken
                  </Link>
                </li>
                <li>
                  <Link
                    to="#contact" // Replace href with to
                    onClick={(e) => handleScrollTo(e, "contact")}
                  >
                    Contact & Socials
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-signup flex">
          {isAuthenticated() ? ( // Call isAuthenticated as a function
            <ProfileDropdown />
          ) : (
            <>
              <Button
                className="custom-button button-login button-desktop flex align-items-center m-05 "
                type="button"
                text="aanmelden"
                onClick={handleLoginClick}
                icon={Login}
              />
              <Button
                className="custom-button button-registration button-choiceSec button-desktop flex align-items-center m05 "
                type="button"
                text="registreer"
                onClick={handleSignUpClick}
                icon={SignUp}

              />
            </>
          )}
        </div>
        {isAuthenticated() ? (  // Call isAuthenticated as a function
          <></>
        ) : (
          <div className="navbar-toggle">
            <div className="navbar-ham" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
