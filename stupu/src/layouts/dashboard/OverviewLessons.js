import React, { useState, useEffect } from "react";
import Slider from "components/slider/Slider";
import { useNavigate } from "react-router-dom";
import DashFilter from "components/dashboard/Filter";
import Button from "components/button/Button";
import "./OverviewLessons.css";
import LessonView from "components/dashboard/MyLesson";

const OverviewLessons = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleDetail = () => navigate("/mijn-bijles-detail");
  
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

  return (
    <section className="box box-transparent box-3 w-100 ">
      <div className={windowWidth > 576 ? 'flex space-between subtitle' : 'subtitle'}>
      <h2 className={windowWidth < 576 ? 'subtitle mt-2' : ''} >Mijn bijlessen</h2>
      <DashFilter id={'lesson-overview'} />        
      </div>
      <Slider
        items={lessons.map((lesson, index) => (
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
              text={"DETAILS"}
              className={"custom-button button-choiceSec mt-05"}
              onClick={handleDetail}
            />
          </LessonView>
        ))}
        initialItemsToShow={1}
        itemClassName="slide-w-50"
      />
    </section>
  );
};

export default OverviewLessons;
