import React, { useContext } from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import OverviewProfile from "layouts/dashboard/OverviewProfile";
import OverviewLessons from "layouts/dashboard/OverviewLessons";
import OverviewRebook from "layouts/dashboard/OverviewRebook";
import OverviewReview from "layouts/dashboard/OverviewReview";
import useChangeBackground from "utils/changeBackground";
import"./Overview.css";
import Loader from "components/loader/Loader";


const Dashboard = () => {
  const { authState } = useContext(AuthContext);
  useChangeBackground("/dashboard", "#59b2a5");

  const currentHour = new Date().getHours();

  let greeting = 'Goeieavond';
  if (currentHour >= 6 && currentHour < 12){
    greeting = 'Goeiemorgen';
  }else if (currentHour >= 12 && currentHour < 18){
    greeting = 'Goeiemiddag'
  }

  let motivation = 'Laten we sterk afsluiten.';
  if (currentHour >= 6 && currentHour < 12){
    motivation = 'De dag is van jou.';
  }else if (currentHour >= 12 && currentHour < 18){
    motivation = 'Je bent al halverwege de dag.'
  }

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="title ptb-1">
        <h1>{greeting} {authState.username} !</h1>
        <p>{motivation}</p>        
      </div>
      <div className="grid-overview flex-wrap">
        <OverviewProfile />
        <OverviewLessons />
        <OverviewRebook />
        <OverviewReview />
        <div className="box-4 flex-colomnn align-items-end box-support p-2">
            <h2>Hulp nodig?</h2>
            <div className="ptb-1">Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a> </div>
            <div>Email: <a href="mailto:info@stupu.be">info@stupu.be</a> </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
