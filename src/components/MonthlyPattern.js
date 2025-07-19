import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const weekOptions = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Last", value: -1 },
];

const dayOptions = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const MonthlyPattern = () => {
  const { monthlyPattern, setMonthlyPattern } = useRecurrence();

  const handleWeekChange = (e) => {
    setMonthlyPattern({
      ...monthlyPattern,
      week: Number(e.target.value)
    });
  };

  const handleDayChange = (e) => {
    setMonthlyPattern({
      ...monthlyPattern,
      day: e.target.value
    });
  };

  return (
    <div>
      <label htmlFor="week-select">Monthly Pattern:</label>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select
          id="week-select"
          value={monthlyPattern.week}
          onChange={handleWeekChange}
        >
          {weekOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <select
          id="day-select"
          value={monthlyPattern.day}
          onChange={handleDayChange}
        >
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthlyPattern;
