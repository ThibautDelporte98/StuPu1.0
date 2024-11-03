import React, { useContext, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { AuthContext } from "hooks/AuthContext";

const ProfileDropdown = ({ userData, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { authState, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleNavigateToDashboard = () => {
    navigate("/dashboard", { replace: true });
  };

  const handleNavigateToHome = () => {
    navigate("/", { replace: true });
  };

  const handleSignOut = () => {
    logout();
  };

  return (
    <div className="profile-dropdown">
      <div className="username" onClick={toggleDropdown}>
        {authState.userInfo?.firstName} {authState.userInfo?.lastName}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={handleNavigateToDashboard}>Go to Dashboard</button>
          <button onClick={handleNavigateToHome}>Go to Home</button>
          <button
            className="custom-button button-logout"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};



export default ProfileDropdown;
