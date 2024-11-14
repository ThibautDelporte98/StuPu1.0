import React from "react";
import DashNav from "layouts/DashboardNav";
import "../dashboard.css";
import useChangeBackground from "utils/changeBackground";
import MyLessonDetail from "components/dashboard/LessonDetail";

const LessonDetail = () => {
  useChangeBackground("/dashboard", "#59b2a5");

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="flex-wrap">
       <MyLessonDetail />
        <div className="box-6 flex-colomnn align-items-end box-support p-2">
            <h2>Hulp nodig?</h2>
            <div className="ptb-1">Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a> </div>
            <div>Email: <a href="mailto:info@stupu.be">info@stupu.be</a> </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
