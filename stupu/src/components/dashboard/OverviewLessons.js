// OverviewLessons.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "components/common/Slider";
import DashFilter from "./DashboardFilter";
import "./OverviewLessons.css";

const OverviewLessons = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const lessons = [
    { title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00" },
    { title: "Nederlands", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
    { title: "Wiskunde", date: "7/11/2024", time: "16:00 - 18:00" },
  ];

  const handleDetails = () => {
    navigate("/details"); // Redirect to the student sign-up path
  };

  return (
    <section className="box box-2 w-100 ">
      <div className="box-top flex pb-2">
        <h2>Mijn lessen</h2>
        <button className="button">Bekijk al mijn lessen</button>
      </div>
      <DashFilter title={"Alle lessen"} />
      <Slider
          items={lessons.map((lesson, index) => (
            <div className="box box-shadow box-primairy-color lessons-item w-100 p-1" key={index}>
              <div className="box-top">
                <h3 className="flex-colomn">
                  {lesson.title} <span className="date">{lesson.date}</span>
                </h3>
                <div className="time">{lesson.time}</div>
              </div>
              <div className="box-info ptb-1">
                <ul>
                  <li>Onderwerp: Vierkants wortels</li>
                  <li>Docent: John Doe</li>
                  <li>Vorm: Online</li>
                </ul>
              </div>
              <div className="box-top">
                <button className="button " onClick={handleDetails} >Bekijk details</button>
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
