import React, { useState, useEffect } from 'react';
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

  // Fetch event data from the backend (GET request)
  const fetchEventData = async () => {
    try {
      const response = await fetch('http://your-backend-api.com/events'); // Replace with your backend API URL
      const data = await response.json();
      const events = {};

      data.forEach((event) => {
        const eventDate = event.date;
        if (!events[eventDate]) {
          events[eventDate] = [];
        }
        events[eventDate].push(event);
      });

      setEventInfo(events);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  };

  // Send event data to the backend (POST request)
  const sendEventDataToBackend = async (newEventInfo) => {
    try {
      const response = await fetch('http://your-backend-api.com/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEventInfo),
      });

      if (!response.ok) {
        throw new Error('Failed to save event data.');
      }

      // Optionally, you can fetch the latest event data after successfully saving it
      fetchEventData();
    } catch (error) {
      console.error('Error sending event data:', error);
    }
  };

  // Handle adding event data to selected dates
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

      // Send the updated event data to the backend
      sendEventDataToBackend(newEventInfo);
    }
  };

  // Handle input changes for event fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch event data when the component is first rendered
  useEffect(() => {
    fetchEventData();
  }, []);

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
            {Object.keys(eventInfo).map((date, index) => (
              <div key={index}>
                <strong>{date}:</strong>
                <ul>
                  {eventInfo[date].map((event, idx) => (
                    <li key={idx}>
                      <strong>{event.title}:</strong> {event.info} (From: {event.startTime} To: {event.endTime})
                    </li>
                  ))}
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
