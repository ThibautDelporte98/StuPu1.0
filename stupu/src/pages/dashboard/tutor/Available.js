import React from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Calender from "layouts/dashboard/Calender";

const groupLessonsByDate = (lessons) => {
  return lessons.reduce((acc, lesson) => {
    const { date, ...rest } = lesson;
    if (!acc[date]) acc[date] = [];
    acc[date].push(rest);
    return acc;
  }, {});
};

const AvailabilityManager = () => {

  const lessons = [
    {
      type: "online",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "2024-12-02",
      startTime: "17:00",
      endTime: "19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
    {
      type: "aan huis",
      tutor: "Jan-Willem Vandenborre",
      title: "Wiskunde",
      date: "2024-12-03",
      startTime: "17:00",
      endTime: "19:00",
      phone: "+32492447788",
      email: "Janwillem@gmail.com",
    },
  ];

  const groupedLessons = groupLessonsByDate(lessons);

  useChangeBackground("/mijn-beschikbaarheid", "#59b2a5");


  return (
    <div className="cstm-container">
      <DashNav />
      <div className="box-top">
        <div className="title">
        <h1>Mijn Beschikbaarheid</h1>
        </div>
      </div>
      <Calender
        addButtonText="Toevoegen"
        noAvailabilityText="Geen tijdslots gevonden."
        onSaveEvent={(events) => console.log("Events saved:", events)}
        initialEvents={groupedLessons}
      />
    </div>
  );
};

export default AvailabilityManager;
