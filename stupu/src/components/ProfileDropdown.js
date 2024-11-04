import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "hooks/AuthContext";
import Avatar from "assets/img/login-avatar.png";
import "./ProfileDropdown.css";
import DropDownIcon from "assets/svg/dropdown-icon.svg";

const ProfileDropdown = ({ userData, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    logout();
    if (onLogout) onLogout();
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <div className="user">
        <img
          className="user-img"
          src={Avatar}
          alt={`user: ${authState.userInfo?.firstName || ""} ${
            authState.userInfo?.lastName || ""
          }`}
        />
        <div className="user-name">
          {authState.userInfo?.firstName} {authState.userInfo?.lastName}
        </div>
        <div className="dropdown-menu-toggle">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L11.5 12L21.5 2"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/dashboard" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/mijn-lessen" onClick={() => setIsOpen(false)}>
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
          <li className="flex justify-content-end">
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
