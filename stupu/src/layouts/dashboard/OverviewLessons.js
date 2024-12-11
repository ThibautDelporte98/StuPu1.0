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
  const [filter, setFilter] = useState("all"); // State to track the selected filter
  const [filteredLessons, setFilteredLessons] = useState([]); // State for filtered lessons

  const lessons = [
    {
      location: "online",
      tutor: "Jan-Willem Vandenborre",
      type: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      location: "aan huis",
      tutor: "Jan-Willem Vandenborre",
      type: "Nederlands",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      location: "op locatie",
      tutor: "Jan-Willem Vandenborre",
      type: "Frans",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      location: "online",
      tutor: "Jan-Willem Vandenborre",
      type: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      location: "online",
      tutor: "Jan-Willem Vandenborre",
      type: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
  ];

  const handleDetail = () => navigate("/mijn-bijles-detail");

  // Effect to update filtered lessons whenever the filter changes
  useEffect(() => {
    if (filter === "all") {
      setFilteredLessons(lessons); // Show all lessons when "all" is selected
    } else {
      setFilteredLessons(lessons.filter((lesson) => lesson.type === filter));
    }
  }, [filter]); // Remove `lessons` from dependencies

  // Handle filter change from DashFilter
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="box box-transparent box-3 w-100">
      <div
        className={
          windowWidth > 576 ? "flex space-between subtitle" : "subtitle"
        }
      >
        <h2 className={windowWidth < 576 ? "subtitle mt-2" : ""}>
          Mijn bijlessen
        </h2>
        <DashFilter
          id="lesson-overview"
          onFilterChange={handleFilterChange}
          options={[
            { value: "all", label: "Alle" },
            { value: "Wiskunde", label: "Wiskunde" },
            { value: "Nederlands", label: "Nederlands" },
            { value: "Frans", label: "Frans" },
            { value: "Aardrijkskunde", label: "Aardrijkskunde" },
          ]}
        />
      </div>
      {filteredLessons.length > 0 ? (
        <Slider
          items={filteredLessons.map((lesson, index) => (
            <LessonView
              index={index}
              location={lesson.location}
              date={lesson.date}
              time={lesson.time}
              type={lesson.type}
              tutor={lesson.tutor}
              handleDetail={handleDetail}
            >
              <Button
                type="submit"
                text="DETAILS"
                className="custom-button button-choiceSec mt-05"
                onClick={handleDetail}
              />
            </LessonView>
          ))}
          initialItemsToShow={1}
          itemClassName="slide-w-50"
        />
      ) : (
        <div className="no-lessons-message">
          Geen lessen op de gekozen filter.
        </div>
      )}
    </section>
  );
};

export default OverviewLessons;
