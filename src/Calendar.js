import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calendar with Range</h1>
        <div>
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </div>
        {date.length > 0 ? (
          <p>
            <span>Start:</span> {date[0].toDateString()}
            &nbsp; to &nbsp;
            <span>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p>
            <span>Default selected date:</span> {date.toDateString()}
          </p>
        )}
      </header>
    </div>
  );
};

export default Calendar;
