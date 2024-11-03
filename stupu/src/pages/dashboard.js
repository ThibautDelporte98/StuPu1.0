import ProfileDropdown from 'components/ProfileDropdown';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

    return (
        <div>
            <h1>Dashboard Page - Protected</h1>
            <ProfileDropdown />
        </div>
    );
};

export default Dashboard;
