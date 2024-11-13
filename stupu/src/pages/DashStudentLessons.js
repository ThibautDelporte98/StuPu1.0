import React, { useContext } from "react";
import DashNav from "layouts/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import "./dashboard.css";
import"components/dashboard/Overview.css";
import useChangeBackground from "utils/changeBackground";
import MyLessons from "components/dashboard/MyLessons";

const MyLessonsStudent = () => {
  
  const { authState } = useContext(AuthContext);
  useChangeBackground("/mijn-bijlessen", "#59b2a5");

  return (
    <div className="cstm-container"> 
      <DashNav />
      <MyLessons />
      <div className="box-6 flex-colomnn align-items-end box-support p-2">
            <h2>Hulp nodig?</h2>
            <div className="ptb-1">Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a> </div>
            <div>Email: <a href="mailto:info@stupu.be">info@stupu.be</a> </div>
        </div>
    </div>
  );
};

export default MyLessonsStudent;
