import Button from "components/button/button2";
import InputField from "components/inputs/InputField";
import React, { useState, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calender.css";

const CustomDateInfo = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [eventInfo, setEventInfo] = useState({});
  const [newEvent, setNewEvent] = useState({
    info: "",
    startTime: "",
    endTime: "",
  });

  const [isWeekly, setIsWeekly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(false);
  

  // Format the date as YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return null;
    return date.toLocaleDateString("en-CA"); // Format as YYYY-MM-DD
  };

  // Fetch event data from the backend (GET request)
  // const fetchEventData = async () => {
  //   try {
  //     const response = await fetch("http://your-backend-api.com/events"); // Replace with your backend API URL
  //     const data = await response.json();
  //     const events = {};

  //     data.forEach((event) => {
  //       const eventDate = event.date;
  //       if (!events[eventDate]) {
  //         events[eventDate] = [];
  //       }
  //       events[eventDate].push(event);
  //     });

  //     setEventInfo(events);
  //   } catch (error) {
  //     console.error("Error fetching event data:", error);
  //   }
  // };

  // // Send event data to the backend (POST request)
  // const sendEventDataToBackend = async (newEventInfo) => {
  //   try {
  //     const response = await fetch("http://your-backend-api.com/events", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newEventInfo),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to save event data.");
  //     }

  //     // Optionally, you can fetch the latest event data after successfully saving it
  //     fetchEventData();
  //   } catch (error) {
  //     console.error("Error sending event data:", error);
  //   }
  // };

  // Handle adding event data to selected dates
  const handleRangeSelect = (range, isWeekly, isMonthly) => {
    setSelectedRange(range);
  
    if (range && range.from && range.to) {
      const startDate = range.from;
      const endDate = range.to;
  
      // If there's no title, info, or time, don't proceed
      if (!newEvent.startTime || !newEvent.endTime) {
        alert("Please enter all event details including title, information, and time.");
        return;
      }
  
      // Prepare the new event
      const newEventDetails = {
        title: newEvent.title,
        info: newEvent.info,
        startTime: newEvent.startTime,
        endTime: newEvent.endTime,
      };
  
      // Copy current events and add the new event for all selected dates
      const newEventInfo = { ...eventInfo };
      let currentDate = new Date(startDate);
  
      // If weekly repetition is selected
      if (isWeekly) {
        while (currentDate <= endDate) {
          const dateString = formatDate(currentDate);
          if (!newEventInfo[dateString]) {
            newEventInfo[dateString] = []; // Ensure it's an array
          }
          newEventInfo[dateString].push(newEventDetails); // Add new event to the date
          currentDate.setDate(currentDate.getDate() + 7); // Add 7 days for weekly repetition
        }
      }
  
      // If monthly repetition is selected
      if (isMonthly) {
        while (currentDate <= endDate) {
          const dateString = formatDate(currentDate);
          if (!newEventInfo[dateString]) {
            newEventInfo[dateString] = []; // Ensure it's an array
          }
          newEventInfo[dateString].push(newEventDetails); // Add new event to the date
          currentDate.setMonth(currentDate.getMonth() + 1); // Add 1 month for monthly repetition
        }
      }
  
      // If no repetition is selected, just add the event once
      if (!isWeekly && !isMonthly) {
        const dateString = formatDate(startDate);
        if (!newEventInfo[dateString]) {
          newEventInfo[dateString] = []; // Ensure it's an array
        }
        newEventInfo[dateString].push(newEventDetails); // Add new event to the date
      }
  
      // Update the state with new event info
      setEventInfo(newEventInfo);
      setNewEvent({ title: "", info: "", startTime: "", endTime: "" }); // Clear input fields
  
      // Send the updated event data to the backend
      // sendEventDataToBackend(newEventInfo);
    }
  };
  
  

  // Handle input changes for event fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch event data when the component is first rendered
  // useEffect(() => {
  //   fetchEventData();
  // }, []);

  return (
    <div>
      <div className="flex p-1 align-items-start">
        <article className="time-slot">
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={setSelectedRange}
          />
<div className="mt-1">
  <h2>Voeg een tijdslot toe:</h2>
  <div className="flex mt-1">
    <InputField
      type={"time"}
      name={"startTime"}
      value={newEvent.startTime}
      onChange={handleInputChange}
      placeholder={"Start time"}
    />
    <InputField
      type={"time"}
      name={"endTime"}
      value={newEvent.endTime}
      onChange={handleInputChange}
      placeholder={"End time"}
    />
  </div>
  <div className="mt-1">
    <textarea
      name="info"
      value={newEvent.info}
      onChange={handleInputChange}
      placeholder="notitie (optioneel)"
    />
  </div>

  {/* Checkboxes for weekly or monthly repetition */}
  <div className="mt-1">
    <label>
      <input
        type="checkbox"
        checked={isWeekly}
        onChange={(e) => setIsWeekly(e.target.checked)}
      />
      Herhaal wekelijks
    </label>
    <label>
      <input
        type="checkbox"
        checked={isMonthly}
        onChange={(e) => setIsMonthly(e.target.checked)}
      />
      Herhaal maandelijks
    </label>
  </div>

  <Button
    className={"custom-button mt-1"}
    onClick={() => handleRangeSelect(selectedRange, isWeekly, isMonthly)}
    text={"Voeg Toe"}
  />
</div>

        </article>
        <article className="my-lesson-content">
          <div>
            {selectedRange ? (
              <>
                              <h2>
                  Jouw Beschikbaarheid:{" "}
                  <span className="medium">
                    {selectedRange.from.toLocaleDateString()} tot{" "}
                    {selectedRange.to.toLocaleDateString()}
                  </span>
                </h2>              
                <div>
                {(() => {
                  // Filter events based on the selected range
                  const filteredDates = Object.keys(eventInfo).filter(
                    (date) => {
                      if (
                        !selectedRange ||
                        !selectedRange.from ||
                        !selectedRange.to
                      )
                        return false;

                      const eventDate = new Date(date);
                      const startDate = new Date(selectedRange.from);
                      const endDate = new Date(selectedRange.to);
                      endDate.setDate(endDate.getDate() + 1); // Add 1 day to the end date

                      return eventDate >= startDate && eventDate < endDate; // Inclusive range
                    }
                  );

                  if (filteredDates.length === 0) {
                    return (
                      <div className="my-lesson-default flex justify-content-center">
                        <p>Geen beschikbaarheid gevonden voor de geselecteerde datum.</p>
                      </div>
                    );
                  }

                  return filteredDates.map((date, index) => (
                    <div className="my-lesson-item" key={index}>
                      <strong>{date}:</strong>
                      <ul>
                        {eventInfo[date].map((event, idx) => (
                          <li key={idx}>
                            (From: {event.startTime} To: {event.endTime}){" "}
                            {event.info}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ));
                })()}
              </div>
              </>
              

            ) : (
              <div className="my-lesson-default flex justify-content-center">
                <p>Selecteer een datum om jouw beschikbaarheid te beheren.</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default CustomDateInfo;
