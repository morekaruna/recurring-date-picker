import React from "react";
import RecurrenceSelector from "./components/RecurrenceSelector";
import WeeklySelector from "./components/WeeklySelector";
import MonthlyPattern from "./components/MonthlyPattern";
import DateRangePicker from "./components/DateRangePicker";
import CalendarPreview from "./components/CalendarPreview";
import { useRecurrence } from "./context/RecurrenceContext";

function App() {
  const { recurrence } = useRecurrence();

  return (
    <div className="app-container">
      <h1>📅 Recurring Date Picker</h1>
      <RecurrenceSelector />
      <DateRangePicker />

      {recurrence === "weekly" && <WeeklySelector />}
      {recurrence === "monthly" && <MonthlyPattern />}

      <CalendarPreview />
    </div>
  );
}

export default App;
