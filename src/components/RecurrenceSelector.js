import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const RecurrenceSelector = () => {
  const { recurrence, setRecurrence, interval, setInterval } = useRecurrence();

  return (
    <div>
      <label htmlFor="recurrence">Recurring Option:</label>
      <select
        id="recurrence"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <label htmlFor="interval">Every:</label>
      <input
        type="number"
        id="interval"
        min="1"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
      />

      <span style={{ marginLeft: "10px" }}>
        {interval > 1 ? `${recurrence}s` : recurrence}
      </span>
    </div>
  );
};

export default RecurrenceSelector;
