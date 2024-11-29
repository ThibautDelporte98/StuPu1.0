import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const CustomDateInfo = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const [eventInfo, setEventInfo] = useState({});
  const [newEvent, setNewEvent] = useState({
    title: '',
    info: '',
    startTime: '',
    endTime: '',
  });

  // Format the date as YYYY-MM-DD
  const formatDate = (date) => {
    if (!date) return null;
    return date.toLocaleDateString('en-CA'); // Format as YYYY-MM-DD
  };

  // Custom logic for specific date information
  const getInfoForDate = (date) => {
    const dateString = formatDate(date); // Use formatted string to match
    const events = eventInfo[dateString] || [];
    return events.length === 0 ? 'No events for this date.' : events;
  };

  // Generate events for the selected range and apply the event info
  const getRangeInfo = (startDate, endDate) => {
    let currentDate = new Date(startDate);
    const events = [];

    while (currentDate <= endDate) {
      const dateString = formatDate(currentDate);
      events.push({
        date: dateString, // Date formatted as YYYY-MM-DD
        info: getInfoForDate(currentDate), // Event information
      });
      currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    }

    return events;
  };

  // Handle selecting a range and adding the event for all selected dates
  const handleRangeSelect = (range) => {
    setSelectedRange(range);

    if (range && range.from && range.to) {
      const startDate = range.from;
      const endDate = range.to;

      // If there's no title, info, or time, don't proceed
      if (!newEvent.title || !newEvent.info || !newEvent.startTime || !newEvent.endTime) {
        alert('Please enter all event details including title, information, and time.');
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
      while (currentDate <= endDate) {
        const dateString = formatDate(currentDate);
        if (!newEventInfo[dateString]) {
          newEventInfo[dateString] = []; // Ensure it's an array
        }
        newEventInfo[dateString].push(newEventDetails); // Add new event to the date
        currentDate.setDate(currentDate.getDate() + 1);
      }

      setEventInfo(newEventInfo); // Update state with new event info
      setNewEvent({ title: '', info: '', startTime: '', endTime: '' }); // Clear input fields
    }
  };

  // Handle input changes for event fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Create New Event</h2>
      <div>
        <input
          type="text"
          name="title"
          value={newEvent.title}
          onChange={handleInputChange}
          placeholder="Event Title"
        />
      </div>
      <div>
        <textarea
          name="info"
          value={newEvent.info}
          onChange={handleInputChange}
          placeholder="Event Information"
        />
      </div>
      <div>
        <input
          type="time"
          name="startTime"
          value={newEvent.startTime}
          onChange={handleInputChange}
          placeholder="Start Time"
        />
        <input
          type="time"
          name="endTime"
          value={newEvent.endTime}
          onChange={handleInputChange}
          placeholder="End Time"
        />
      </div>

      <button onClick={() => handleRangeSelect(selectedRange)}>
        Add Event to Selected Dates
      </button>

      <DayPicker
        mode="range"
        selected={selectedRange}
        onSelect={setSelectedRange}
        footer={
          selectedRange
            ? `Selected range: ${selectedRange.from.toLocaleDateString()} to ${selectedRange.to.toLocaleDateString()}`
            : 'Pick a date range.'
        }
      />

      <div style={{ marginTop: '20px', fontSize: '16px' }}>
        {selectedRange ? (
          <div>
            <p>
              <strong>Events for the selected range:</strong>
            </p>
            {getRangeInfo(selectedRange.from, selectedRange.to).map((event, index) => (
              <div key={index}>
                <strong>{event.date}:</strong>
                <ul>
                  {Array.isArray(event.info) ? (
                    event.info.map((e, idx) => (
                      <li key={idx}>
                        <strong>{e.title}:</strong> {e.info} (From: {e.startTime} To: {e.endTime})
                      </li>
                    ))
                  ) : (
                    <p>{event.info}</p> // Fallback if event.info is not an array
                  )}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>Select a date range to see the events.</p>
        )}
      </div>
    </div>
  );
};

export default CustomDateInfo;
