import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "hooks/AuthContext";
import Avatar from "assets/img/login-avatar.png";
import "./ProfileDropdown.css";

const ProfileDropdown = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, logout } = useContext(AuthContext);
  
  const location = useLocation(); // Get current route location
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    logout();
    if (onLogout) onLogout();
  };

  // Determine if we're on the dashboard
  const isDashboard = location.pathname === "/dashboard"; // Adjust the path accordingly

  // Class name logic based on current page
  const backgroundClass = isDashboard ? " dashboard-background" : "default-background";

  return (
    <div className="dropdown">
      <div className="user">
        <img
          className="user-img"
          src={Avatar}
          alt={`user: ${authState.userInfo?.firstName || ""} ${authState.userInfo?.lastName || ""}`}
        />
        <div className="user-name">
          {authState.userInfo?.firstName} {authState.userInfo?.lastName}
        </div>
        <div className={`dropdown-menu-toggle ${isOpen ? "close" : ""}`} onClick={toggleDropdown}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L11.5 12L21.5 2"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`dropdown-menu  ${isOpen ? "open" : ""} ${backgroundClass}`}>
        <button className="button-delete flex justify-content-end w-100 mobile-close" onClick={toggleDropdown}>
          <svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.01562 9.01562L27.0468 27.0468"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01562 27.0469L27.0468 9.01565"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <ul>
          {authState.userInfo?.role === "admin" ? (
            <li>
              <Link to="/admin" onClick={() => setIsOpen(false)}>
                Admin Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Mijn Lessen
            </Link>
          </li>
          <li>
            <Link to="/mijn-lessen" onClick={() => setIsOpen(false)}>
              Mijn Profiel
            </Link>
          </li>
          <li>
            <Link to="/zoek-bijles" onClick={() => setIsOpen(false)}>
              Zoek bijles
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="flex justify-content-end mobile-logout">
            <Link to="/" onClick={handleSignOut}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
