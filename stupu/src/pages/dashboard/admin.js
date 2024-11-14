import React, { useContext } from "react";
import DashNav from "layouts/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import "./dashboard.css";
import"components/dashboard/Overview.css";


const Admin = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div className="cstm-container">
      <DashNav />
      <h1>Welkom {authState.userInfo?.firstName}!</h1>
    </div>
  );
};

export default Admin;
