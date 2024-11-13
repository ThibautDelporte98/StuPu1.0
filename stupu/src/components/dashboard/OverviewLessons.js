// OverviewLessons.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "components/common/Slider";
import DashFilter from "./DashboardFilter";
import Avatar from "assets/img/defaultprofile.webp";
import "./OverviewLessons.css";

const OverviewLessons = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const lessons = [
    {
      type: "online",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      type: "aan huis",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      type: "op locatie",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
    { type: "online", tutor: "Jan-Willem Vandenborre", title: "Wiskunde", date: "7/11/2024", time: "17:00 - 19:00", phone: "+32492447788", email: "Janwillem@gmail.com" },
  ];



  return (
    <section className="box box-transparent box-5 w-100 ">
      <DashFilter title={"Alle lessen"} />
      <Slider
          items={lessons.map((lesson, index) => (
            <div className="box lesson" key={index}>
            <div className="lesson-type box-shadow">{lesson.type}</div>
            <div className="lesson-teacher flex pb-1">
              <img className="avatar-small box-shadow" src={Avatar} alt="avatar" />
              <p>{lesson.tutor}</p>
            </div>
            <div className="lesson-date-time  flex justify-content-center ptb-1">
              <p className="bold">
                {lesson.date} | {lesson.time}
              </p>
            </div>
            <div className="list-information ptb-1-05">
              <ul>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Vak:</div> {lesson.title}
                </li>
                <li className="flex ptb-05">
                  <div className="medium mr-1">Onderwerp:</div> {lesson.title}
                </li>
              </ul>
            </div>
            <div className="actions">
              <button className="custom-button button-choiceSec mt-05">
                Details
              </button>
            </div>
          </div>
          ))}
          initialItemsToShow={1}
          itemClassName="slide-w-50"
      />
    </section>
  );
};

export default OverviewLessons;
