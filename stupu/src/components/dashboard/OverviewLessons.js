// OverviewLessons.js
import React from "react";
import Slider from "components/common/Slider";
import DashFilter from "./DashboardFilter";
import "./OverviewLessons.css";

const OverviewLessons = () => {
  const lessons = [
    { title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00" },
    { title: "Nederlands", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
  ];

  return (
    <section className="box box-2 w-100">
      <div className="box-top flex">
        <h2>Mijn lessen</h2>
        <button className="button">Bekijk al mijn lessen</button>
      </div>
      <DashFilter title={"Alle lessen"} />
      <Slider
          items={lessons.map((lesson, index) => (
            <div className="box lessons-item w-100 p-1" key={index}>
              <div className="box-top">
                <h3 className="flex-colomn">
                  {lesson.title} <span className="date">{lesson.date}</span>
                </h3>
                <div className="time">{lesson.time}</div>
              </div>
              <div className="box-info ptb-1">
                <ul>
                  <li>Onderwerp</li>
                  <li>Docent</li>
                  <li>Onderwerp</li>
                </ul>
              </div>
              <div className="box-top">
                <button className="button">Bekijk details</button>
                <button className="button">Annuleer</button>
              </div>
            </div>
          ))}
          itemsToShow={2}
      />
    </section>
  );
};

export default OverviewLessons;
