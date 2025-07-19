import { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const useRecurrence = () => useContext(RecurrenceContext);

// Provider Component
export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState("daily"); // daily | weekly | monthly | yearly
  const [interval, setInterval] = useState(1); // every X units
  const [selectedDays, setSelectedDays] = useState([]); // for weekly
  const [monthlyPattern, setMonthlyPattern] = useState({
    week: 2,
    day: "Tuesday"
  }); // for monthly
  const [startDate, setStartDate] = useState(""); // string yyyy-mm-dd
  const [endDate, setEndDate] = useState(""); 

  return (
    <RecurrenceContext.Provider
      value={{
        recurrence,
        setRecurrence,
        interval,
        setInterval,
        selectedDays,
        setSelectedDays,
        monthlyPattern,
        setMonthlyPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};
