import React, { useState } from "react";
import { format, add, differenceInMinutes, differenceInDays } from "date-fns";
import "./DatePage.css";

const DatePage = () => {
  const [fromDate, setFromDate] = useState(new Date());
  const [duration, setDuration] = useState({ value: 0, unit: "minutes" });
  const [toDate, setToDate] = useState(fromDate);

  const handleFromDateChange = (date) => {
    setFromDate(date);
    calculateToDate(date, duration);
  };

  const handleDurationChange = (event) => {
    const { value } = event.target;
    setDuration({ ...duration, value: parseInt(value, 10) });
    calculateToDate(fromDate, { ...duration, value: parseInt(value, 10) });
  };

  const handleDurationUnitChange = (event) => {
    const { value } = event.target;
    setDuration({ ...duration, unit: value });
    calculateToDate(fromDate, { ...duration, unit: value });
  };

  const calculateToDate = (startDate, duration) => {
    let endDate;
    if (duration.unit === "minutes") {
      endDate = add(startDate, { minutes: duration.value });
    } else if (duration.unit === "days") {
      endDate = add(startDate, { days: duration.value });
    }
    setToDate(endDate);
  };

  const getDurationInMinutes = () => {
    if (duration.unit === "minutes") {
      return duration.value;
    } else if (duration.unit === "days") {
      return duration.value * 24 * 60;
    }
    return 0;
  };

  const getDurationInDays = () => {
    if (duration.unit === "minutes") {
      return Math.floor(duration.value / (24 * 60));
    } else if (duration.unit === "days") {
      return duration.value;
    }
    return 0;
  };

  return (
    <div className="date-page">
      <div className="date-page-container">
        <h1>React JS - Challenge 3 </h1>
        <div className="form-group">
          <label htmlFor="from-date">From Date:</label>
          <input
            id="from-date"
            type="datetime-local"
            value={format(fromDate, "yyyy-MM-dd'T'HH:mm")}
            onChange={(e) => handleFromDateChange(new Date(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration:</label>
          <input
            id="duration"
            type="number"
            value={duration.value}
            onChange={handleDurationChange}
          />
          <select value={duration.unit} onChange={handleDurationUnitChange}>
            <option value="minutes">Minutes</option>
            <option value="days">Days</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to-date">To Date:</label>
          <input
            id="to-date"
            type="datetime-local"
            value={format(toDate, "yyyy-MM-dd'T'HH:mm")}
            readOnly
            className="to-date-input"
          />
        </div>
        <div className="form-group">
          <p>Duration in minutes: {getDurationInMinutes()}</p>
          <p>Duration in days: {getDurationInDays()}</p>
        </div>
      </div>
    </div>
  );
};

export default DatePage;
