import React, { useContext } from "react";
import DashNav from "layouts/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import OverviewProfile from "components/dashboard/OverviewProfile";
import "../dashboard.css";
import"components/dashboard/Overview.css";
import OverviewLessons from "components/dashboard/OverviewLessons";
import OverviewRebook from "components/dashboard/OverviewRebook";
import OverviewReview from "components/dashboard/OverviewReview";
import useChangeBackground from "utils/changeBackground";

const Dashboard = () => {
  const { authState } = useContext(AuthContext);
  useChangeBackground("/dashboard", "#59b2a5");

  return (
    <div className="cstm-container">
      <DashNav />
      <h1>Welkom {authState.userInfo?.firstName}!</h1>
      <div className="dash-overview flex-wrap">
        <OverviewProfile />
        <OverviewLessons />
        <OverviewRebook />
        <OverviewReview />
        <div className="box-6 flex-colomnn align-items-end box-support p-2">
            <h2>Hulp nodig?</h2>
            <div className="ptb-1">Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a> </div>
            <div>Email: <a href="mailto:info@stupu.be">info@stupu.be</a> </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
