import React from "react";
import DashFilter from "./DashboardFilter";
import "./OverviewRebook.css";

const OverviewRebook = () => {
  const lessons = [
    { title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00" },
    { title: "Nederlands", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Nederlands", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
  ];

  return (
    <section className="box-3 w-100">
      <div className="flex-colomn">
        <div className="box">
          <DashFilter title={"voltooide lessen"} />
          <div className="scroll-container p-1 mtb-1">
            {lessons.map((lesson, index) => (
              <div key={index} className="box box-shadow flex-colomn justify-space-between w-100  quick-item  ">
                <div className="box-top">
                  <h3>{lesson.title}</h3>
                  <div className="date">{lesson.date}</div>
                </div>
                <div className="box-top">
                  <div className="tutor">Docent: John Doe</div>
                  <button className="button">Herboeken</button>
                </div>
              </div>
            ))}
          </div>          
        </div>
      </div>

    </section>
  );
};

export default OverviewRebook;
