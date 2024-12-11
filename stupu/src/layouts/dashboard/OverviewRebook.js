import React, { useState, useEffect } from "react";
import DashFilter from "components/dashboard/Filter";
import Avatar from "assets/img/defaultprofile.webp";
import "./OverviewRebook.css";

const OverviewRebook = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState("all");
  const [filteredLessons, setFilteredLessons] = useState([]);

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
      type: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      location: "op locatie",
      tutor: "Jan-Willem Vandenborre",
      type: "Wiskunde",
      date: "7/11/2024",
      time: "17:00 - 19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
  ];

  useEffect(() => {
    if (filter === "all") {
      setFilteredLessons(lessons); // Show all lessons when "all" is selected
    } else {
      setFilteredLessons(lessons.filter((lesson) => lesson.type === filter));
    }
  }, [filter]);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="rebook box-2 w-100">
      <div className="flex-colomn">
        <div className="box box-transparent">
          <div
            className={
              windowWidth > 576 ? "flex space-between subtitle" : "subtitle"
            }
          >
            <h2 className={windowWidth < 576 ? "subtitle mt-2" : ""}>
              Voltooid
            </h2>
            <DashFilter
              id="lesson-overview"
              onFilterChange={handleFilterChange}
              options={[
                { value: "all", label: "Alle" },
                { value: "Wiskunde", label: "Wiskunde" },
                { value: "Nederlands", label: "Nederlands" },
                { value: "Frans", label: "Frans" },
              ]}
            />
          </div>
          <div className="scroll-container mb-1">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson, index) => (
                <div className="box lesson lesson-compleet" key={index}>
                  <div className="lesson-teacher flex pb-1">
                    <img
                      className="avatar-small box-shadow"
                      src={Avatar}
                      alt="avatar"
                    />
                    <p>{lesson.tutor}</p>
                  </div>
                  <div className="lesson-date-time flex justify-content-center ptb-1">
                    <p className="bold">{lesson.date}</p>
                  </div>
                  <div className="actions">
                    <button className="custom-button button-border-sec-color mt-05">
                      HERBOEK
                    </button>
                    <button className="custom-button button-choiceSec mt-05">
                      DETAILS
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-lessons-message">
                Geen lessen op de gekozen filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewRebook;
