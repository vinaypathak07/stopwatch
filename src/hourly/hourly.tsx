import React from 'react';
import DayGreetings from './day-greetings';
import Calendar from './calendar';

export default function Hourly() {
  const hasCurrentDayTasks = false;
  return (
    <div>
      <Calendar />
      {hasCurrentDayTasks ? <div>Show current day tasks</div> : <DayGreetings />}
    </div>
  );
}
