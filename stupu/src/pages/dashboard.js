import ProfileDropdown from 'components/ProfileDropdown';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear the token (or any authentication data) from local storage
        localStorage.removeItem('token'); // or sessionStorage.removeItem('token')
        
        // Redirect the user to the login page
        navigate('/login');
    };

    return (
        <div>
            <h1>Dashboard Page - Protected</h1>
            <ProfileDropdown />
        </div>
    );
};

export default Dashboard;
