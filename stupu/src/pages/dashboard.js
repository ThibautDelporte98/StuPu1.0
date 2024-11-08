import React, { useContext } from "react";
import DashNav from "layouts/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import OverviewProfile from "components/dashboard/OverviewProfile";
import "./dashboard.css";
import"components/dashboard/Overview.css";
import OverviewLessons from "components/dashboard/OverviewLessons";

const Dashboard = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div className="cstm-container">
      <DashNav />
      <h1>Welkom {authState.userInfo?.firstName}!</h1>
      <div className="dash-overview flex-wrap">
        <OverviewProfile />
        <OverviewLessons />
        <section className="box box-3">
          {authState.userInfo?.firstName} {authState.userInfo?.lastName}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
