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
    <section className="box box-1 w-100">
      <DashFilter title={"voltooide lessen"} />
      <div className="scroll-container mtb-1">
        {lessons.map((lesson, index) => (
          <div key={index} className="box quick-item w-100 ">
            <div className="box-top">
              <h3>{lesson.title}</h3>
              <div className="date">{lesson.date}</div>
            </div>
            <div className="box-top">
              <div className="tutor">Docent: John Doe</div>
              <button className="button">Annuleer</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewRebook;
