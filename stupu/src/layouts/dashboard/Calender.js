import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/button/button2";
import CloseIcon from "components/button/CloseIcon";
import InputField from "components/inputs/InputField";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calender.css";
import LessonView from "components/dashboard/MyLesson";
import { nl } from 'date-fns/locale'; // Import Dutch locale


const Calender = ({
  addButtonText = "Voeg Toe",
  noAvailabilityText = "Geen beschikbaarheid gevonden voor de geselecteerde datum.",
  onSaveEvent,
  initialEvents = {},
  lesson = false,
}) => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [eventInfo, setEventInfo] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({
    id: Date.now(), // Generate a unique ID based on current timestamp
    info: "",
    startTime: "",
    endTime: "",
  });

  const formatDate = (date) => (date ? date.toLocaleDateString("en-CA") : null);

  const handleRangeSelect = (range) => {
    if (!range || !newEvent.startTime || !newEvent.endTime) {
      alert("Please enter all event details including time and optional info.");
      return;
    }

    const newEventDetails = { ...newEvent };
    const updatedEventInfo = { ...eventInfo };
    let currentDate = new Date(range.from);

    while (currentDate <= range.to) {
      const dateString = formatDate(currentDate);

      // Check if there are existing events for this date
      if (!updatedEventInfo[dateString]) {
        updatedEventInfo[dateString] = []; // Create a new array for this date if not existing
      }

      // Add the new event only if it does not conflict with existing events
      const existingEvents = updatedEventInfo[dateString];
      const isConflict = existingEvents.some(event => (
        event.startTime === newEventDetails.startTime &&
        event.endTime === newEventDetails.endTime
      ));

      if (!isConflict) {
        updatedEventInfo[dateString].push(newEventDetails); // Add the new event
      } else {
        alert("This time slot already exists for the selected date.");
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    setEventInfo(updatedEventInfo);
    setNewEvent({ id: Date.now(), info: "", startTime: "", endTime: "" }); // Reset the new event with a new ID
    onSaveEvent && onSaveEvent(updatedEventInfo); // Trigger save handler
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleDetail = () => navigate("/mijn-bijles-detail");

  return (
    <div className="calender flex align-items-start ptb-1">
      <article className="time-slot">
        <DayPicker
          mode="range"
          selected={selectedRange}
          onSelect={setSelectedRange}
          locale={nl} // Set the Dutch locale

        />
        {!lesson ? (
          <div className="mt-1">
            <h2>Voeg een tijdslot toe:</h2>
            <div className="flex mt-1">
              <InputField
                id={"startTime"}
                type="time"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleInputChange}
                placeholder="Start time"
              />
              <InputField
                id={"endTime"}
                type="time"
                name="endTime"
                value={newEvent.endTime}
                onChange={handleInputChange}
                placeholder="End time"
              />
            </div>
            <div className="mt-1">
              <textarea
                id={"info"}
                name="info"
                value={newEvent.info}
                onChange={handleInputChange}
                placeholder="notitie (optioneel)"
              />
            </div>
            <Button
              className="custom-button mt-1"
              onClick={() => handleRangeSelect(selectedRange)}
              text={addButtonText}
            />
          </div>
        ) : (
          ""
        )}
      </article>
      <article className="my-lesson-content">
        {selectedRange ? (
          <>
            <h2>
              {lesson ? "Jouw lessenrooster:" : "Jouw Beschikbaarheid:"}
              <span className="medium">
                {selectedRange.from.toLocaleDateString()} tot{" "}
                {selectedRange.to.toLocaleDateString()}
              </span>
            </h2>
            <div className="flex-wrap">
              {(() => {
                const filteredDates = Object.keys(eventInfo).filter((date) => {
                  const eventDate = new Date(date);
                  const startDate = new Date(selectedRange.from);
                  const endDate = new Date(selectedRange.to);
                  endDate.setDate(endDate.getDate() + 1);
                  return eventDate >= startDate && eventDate < endDate;
                });

                if (filteredDates.length === 0) {
                  return (
                    <div className="my-lesson-default flex justify-content-center">
                      <p>{noAvailabilityText}</p>
                    </div>
                  );
                }

                return filteredDates.map((date, index) => (
                  <div
                    className={`my-lesson-item ${lesson ? "change-width" : ""}`}
                    key={`event-${date}-${index}`}
                  >
                    <h3>
                      {new Intl.DateTimeFormat("nl-NL", {
                        weekday: "long",
                        day: "numeric",
                        month: "numeric",
                      }).format(new Date(date))}:
                    </h3>
                    <ul>
                      {eventInfo[date].map((event, index) => (
                        <div key={`event-${event.id + index}`}>
                          {lesson ? (
                            <LessonView
                              index={`event-${event.id + index}`}
                              type={event.type}
                              date={event.date}
                              startTime={event.startTime}
                              startEnd={event.startEnd}
                              title={event.title}
                              tutor={event.tutor}
                            >
                              <Button
                                type={"submit"}
                                text={"DETAILS"}
                                className={"custom-button button-choiceSec mt-05"}
                                onClick={handleDetail}
                              />
                              <Button
                                type={"submit"}
                                text={"ANNULEREN"}
                                className={"custom-button button-decline mt-05"}
                                onClick={handleDetail}
                              />
                            </LessonView>
                          ) : (
                            <li className="my-lesson-time flex space-between" index={index}>
                              <div>
                                {event.startTime} - {event.endTime} {event.info}
                              </div>
                              <Button
                                className="button-cancel"
                                icon={<CloseIcon strokeColor="red" width={10} height={10} />}
                              />
                            </li>
                          )}
                        </div>
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
      </article>
    </div>
  );
};

export default Calender;
