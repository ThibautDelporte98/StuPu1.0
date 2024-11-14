import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashFilter from "./DashboardFilter";
import Avatar from "assets/img/defaultprofile.webp";
import "./MyLessons.css";
import Slider from "components/common/Slider";
import Button from "components/common/Button";

const MyLessons = () => {
  const navigate = useNavigate();

  const handleDetail = () => navigate("/mijn-bijles-detail");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);

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

  const renderLesson = (lesson, index) => (
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
            <div className="medium mr-1">Locatie:</div> Teams meeting
          </li>
        </ul>
      </div>
      <div className="actions">
        <Button type={"submit"} text={"CONTACTEER DOCENT"} className={"custom-button button-border-sec-color"} />
        <Button type={"submit"} text={"DETAILS"} className={"custom-button button-choiceSec mt-05"} onClick={handleDetail}/>
        <Button type={"submit"} text={"ANNULEREN"} className={"custom-button button-cancel mt-05"}/>
      </div>
    </div>
  );

  const reschedualLesson = (lesson, index) => (
    <div className="box lesson" key={index}>
      <div className="lesson-delete box-shadow">
        <button className="button-delete flex justify-content-end w-100">
          <svg
            width="28"
            height="28"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.01562 9.01562L27.0468 27.0468"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.01562 27.0469L27.0468 9.01565"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="lesson-teacher flex pb-1">
        <img className="avatar-small box-shadow" src={Avatar} alt="avatar" />
        <p>{lesson.tutor}</p>
      </div>
      <div className="lesson-date-time  flex justify-content-center ptb-1">
        <p className="bold">{lesson.title}</p>
      </div>
      <div className="list-information ptb-1-05">
        <ul>
          <li className="flex ptb-05">
            <div className="medium mr-1">Onderwijsvorm:</div> {lesson.title}
          </li>
          <li className="flex ptb-05">
            <div className="medium mr-1">Type: </div>
            {lesson.type}
          </li>
        </ul>
      </div>
      <div className="actions">
        <button className="custom-button button-choiceSec mt-05">
           HERBOEK "{lesson.tutor.split(" ")[0]}"
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="box-top">
        <h1>Mijn Bijlessen</h1>
      </div>
      <div className="box-top ptb-1-05">
        <h2>Geplande lessen</h2>
        <DashFilter />
      </div>
      <div className="my-lessons flex justify-content-center ptb-1-05">
        {lessons.length > 3 || isSmallScreen ? (
          <Slider items={lessons.map(renderLesson)} initialItemsToShow={3} />
        ) : (
          lessons.map(renderLesson)
        )}
      </div>
      <div className="box-top ptb-1-05">
        <h2>Herboek voltooide lessen</h2>
        <DashFilter />
      </div>
      <div className="my-lessons flex justify-content-center ptb-1-05">
        {lessons.length > 3 || isSmallScreen ? (
          <Slider
            items={lessons.map(reschedualLesson)}
            initialItemsToShow={3}
          />
        ) : (
          lessons.map(reschedualLesson)
        )}
      </div>
    </>
  );
};

export default MyLessons;
