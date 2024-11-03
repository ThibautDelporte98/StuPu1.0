import React, { useContext, useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { AuthContext } from "hooks/AuthContext";

const ProfileDropdown = ({ userData, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext(AuthContext);
  const { authState } = auth;
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleNavigateToDashboard = () => {
    navigate("/dashboard", { replace: true }); // Replace current history entry
    
  };

  const handleNavigateToHome = () => {
    navigate("/", { replace: true }); // Replace current history entry
    
  };

  const handleSignOut = () => {
    // Clear the token (or any authentication data) from local storage
    localStorage.removeItem('token'); // or sessionStorage.removeItem('token')
    
    // Redirect the user to the login page
    navigate('/login');
};


  return (
    <div className="profile-dropdown">
      <div className="username" onClick={toggleDropdown}>
        {authState.userInfo.firstName} {authState.userInfo.lastName}

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
