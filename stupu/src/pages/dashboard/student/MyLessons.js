import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashFilter from "components/dashboard/Filter";
import "./MyLessons.css";
import Slider from "components/slider/Slider";
import Button from "components/button/Button";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import LessonView from "components/dashboard/MyLesson";
import Calender from "layouts/dashboard/Calender";
const MyLessonsStudent = () => {
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
      type: "online",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
  ];

  // const renderLesson = (lesson, index) => (
  //   <LessonView
  //     index={index}
  //     type={lesson.type}
  //     date={lesson.date}
  //     time={lesson.time}
  //     title={lesson.title}
  //     tutor={lesson.tutor}
  //     handleDetail={handleDetail}
  //   >
  //     <Button
  //       type={"submit"}
  //       text={"CONTACTEER DOCENT"}
  //       className={"custom-button button-border-sec-color"}
  //     />
  //     <Button
  //       type={"submit"}
  //       text={"DETAILS"}
  //       className={"custom-button button-choiceSec mt-05"}
  //       onClick={handleDetail}
  //     />
  //     <Button
  //       type={"submit"}
  //       text={"ANNULEREN"}
  //       className={"custom-button button-cancel mt-05"}
  //     />
  //   </LessonView>
  // );

  const reschedualLesson = (lesson, index) => (
    <LessonView
      index={index}
      type={lesson.type}
      date={lesson.date}
      time={lesson.time}
      title={lesson.title}
      tutor={lesson.tutor}
      handleDetail={handleDetail}
    >
      <Button
        type={"submit"}
        text={"HERBOEK"}
        className={"custom-button button-border-sec-color mt-05"}
        onClick={handleDetail}
      />
    <Button
        type={"submit"}
        text={"DETAILS"}
        className={"custom-button button-choiceSec mt-05"}
        onClick={handleDetail}
      />
    </LessonView>
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useChangeBackground("/mijn-bijlessen", "#59b2a5");

  return (
    <div className="cstm-container">
      <DashNav />
      <div className="box-top">
        <h1>Mijn Bijlessen</h1>
      </div>
      <Calender />
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
      <div className="box-6 flex-colomnn align-items-end box-support p-2">
        <h2>Hulp nodig?</h2>
        <div className="ptb-1">
          Telefoon: <a href="tel:0477889944">04 77 88 99 44 </a>{" "}
        </div>
        <div>
          Email: <a href="mailto:info@stupu.be">info@stupu.be</a>{" "}
        </div>
      </div>
    </div>
  );
};

export default MyLessonsStudent;
  