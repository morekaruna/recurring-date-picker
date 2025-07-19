import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const WeeklySelector = () => {
  const { selectedDays, setSelectedDays } = useRecurrence();

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div>
      <label>Select Days of the Week:</label>
      <div className="checkbox-group">
        {weekdays.map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
    </div>
  );
};

export default WeeklySelector;
