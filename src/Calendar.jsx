import React, { useState } from 'react';
import './Calendar.css'; // Add this for styling

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleMonthChange = (event) => {
        setCurrentMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setCurrentYear(parseInt(event.target.value));
    };

    function debug({ day, month, year }) {
        console.log(`Key: ${day}-${month}-${year}`);
    }

    const renderCalendar = () => {
        const days = [];
        const totalDays = daysInMonth(currentMonth, currentYear);
        const startDay = firstDayOfMonth(currentMonth, currentYear);

        // Fill empty slots for days before the first day of the month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-slot"></div>);
        }

        // Fill days of the month
        for (let day = 1; day <= totalDays; day++) {
            days.push(
            <div
                onClick={() => debug({ day, month: currentMonth, year: currentYear })}
                key={day}
                className="day"
            >
                {day}
            </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <h2>{months[currentMonth]} {currentYear}</h2>
            <div className="calendar-grid">
                <div className="day-name">Sun</div>
                <div className="day-name">Mon</div>
                <div className="day-name">Tue</div>
                <div className="day-name">Wed</div>
                <div className="day-name">Thu</div>
                <div className="day-name">Fri</div>
                <div className="day-name">Sat</div>
                {renderCalendar()}
            </div>
            <div className="selectors">
                <div className="month-selector">
                    <label htmlFor="month">Change Month: </label>
                    <select id="month" value={currentMonth} onChange={handleMonthChange}>
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="year-selector">
                    <label htmlFor="year">Change Year: </label>
                    <input
                        id="year"
                        type="number"
                        value={currentYear}
                        onChange={handleYearChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendar;