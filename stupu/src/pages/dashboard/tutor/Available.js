import React from "react";
import DashNav from "layouts/dashboard/DashboardNav";
import useChangeBackground from "utils/changeBackground";
import Calender from "layouts/dashboard/Calender";

const AvailabilityManager = () => {

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

  useChangeBackground("/mijn-beschikbaarheid", "#59b2a5");


  return (
    <div className="cstm-container">
      <DashNav />
      <Calender
        addButtonText="Toevoegen"
        noAvailabilityText="Geen tijdslots gevonden."
        onSaveEvent={(events) => console.log("Events saved:", events)}
        initialEvents={{
          "2024-12-01": [
            { startTime: "10:00", endTime: "11:00", info: "Lesson 1" },
          ],
        }}
      />
    </div>
  );
};

export default AvailabilityManager;
