import React, { useMemo } from "react";
import { useRecurrence } from "../context/RecurrenceContext";

// Utility to get weekday index from string
const dayIndex = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const CalendarPreview = () => {
  const {
    recurrence,
    interval,
    startDate,
    endDate,
    selectedDays,
    monthlyPattern
  } = useRecurrence();

  const previewDates = useMemo(() => {
    if (!startDate) return [];

    const result = [];
    const limit = 10;
    let current = new Date(startDate);
    let count = 0;

    while (count < limit) {
      const dateStr = current.toISOString().split("T")[0];

      if (!endDate || current <= new Date(endDate)) {
        if (recurrence === "daily") {
          result.push(dateStr);
          current.setDate(current.getDate() + interval);
        } else if (recurrence === "weekly") {
          const base = new Date(current);
          for (let i = 0; i < 7; i++) {
            const next = new Date(base);
            next.setDate(base.getDate() + i);
            const dayName = next.toLocaleDateString("en-US", { weekday: "long" });

            if (selectedDays.includes(dayName)) {
              if (!endDate || next <= new Date(endDate)) {
                result.push(next.toISOString().split("T")[0]);
                count++;
                if (count >= limit) break;
              }
            }
          }
          current.setDate(current.getDate() + 7 * interval);
        } else if (recurrence === "monthly") {
          const month = current.getMonth();
          const year = current.getFullYear();
          const patternDate = getMonthlyPatternDate(month, year, monthlyPattern);

          if (patternDate && (!endDate || patternDate <= new Date(endDate))) {
            result.push(patternDate.toISOString().split("T")[0]);
          }

          current.setMonth(current.getMonth() + interval);
        } else if (recurrence === "yearly") {
          result.push(dateStr);
          current.setFullYear(current.getFullYear() + interval);
        }
      }

      if (recurrence !== "weekly") count++;
    }

    return result;
  }, [recurrence, interval, startDate, endDate, selectedDays, monthlyPattern]);

  return (
    <div className="preview">
      <h3>📅 Preview Recurring Dates</h3>
      {previewDates.length === 0 ? (
        <p>No dates to show. Please set a start date.</p>
      ) : (
        <ul>
          {previewDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Helper for "The second Tuesday of every month"
function getMonthlyPatternDate(month, year, { week, day }) {
  const dayIdx = dayIndex[day];
  let count = 0;
  let date;

  for (let i = 1; i <= 31; i++) {
    const d = new Date(year, month, i);
    if (d.getMonth() !== month) break; // gone too far

    if (d.getDay() === dayIdx) {
      count++;
      if (week > 0 && count === week) return d;
      if (week === -1) date = d; // last matching day
    }
  }

  return date;
}

export default CalendarPreview;
