import React, { useState } from "react";
import Button from "components/button/button2";
import CloseIcon from "components/button/CloseIcon";
import InputField from "components/inputs/InputField";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calender.css";


const Calender = ({
  addButtonText = "Voeg Toe",
  noAvailabilityText = "Geen beschikbaarheid gevonden voor de geselecteerde datum.",
  onSaveEvent,
  initialEvents = {},
}) => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [eventInfo, setEventInfo] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({ info: "", startTime: "", endTime: "" });

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
      if (!updatedEventInfo[dateString]) {
        updatedEventInfo[dateString] = [];
      }
      updatedEventInfo[dateString].push(newEventDetails);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setEventInfo(updatedEventInfo);
    setNewEvent({ info: "", startTime: "", endTime: "" });
    onSaveEvent && onSaveEvent(updatedEventInfo); // Trigger save handler
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  return (
      <div className="calender flex align-items-start ptb-1">
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
                type="time"
                name="startTime"
                value={newEvent.startTime}
                onChange={handleInputChange}
                placeholder="Start time"
              />
              <InputField
                type="time"
                name="endTime"
                value={newEvent.endTime}
                onChange={handleInputChange}
                placeholder="End time"
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
            <Button
              className="custom-button mt-1"
              onClick={() => handleRangeSelect(selectedRange)}
              text={addButtonText}
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
                      <div className="my-lesson-item" key={index}>
                        <h3>
                          {new Intl.DateTimeFormat("nl-NL", {
                            weekday: "long",
                            day: "numeric",
                            month: "numeric",
                          }).format(new Date(date))}
                          :
                        </h3>
                        <ul>
                          {eventInfo[date].map((event, idx) => (
                            <li
                              className="my-lesson-time flex space-between"
                              key={idx}
                            >
                              <div>
                                {event.startTime} - {event.endTime} {event.info}
                              </div>
                              <Button
                                className="button-cancel"
                                icon={<CloseIcon strokeColor="red" width={10} height={10} />}
                              />
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
  );
};

export default Calender;