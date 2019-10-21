import React from 'react';
import DayGreetings from './day-greetings';
import Calendar from './calendar';
import styled from 'src/styled';
import TextInput from 'src/components/text-input';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 45px;
  min-height: calc(100vh - 21px);
`;

export default function Hourly() {
  const hasCurrentDayTasks = false;
  return (
    <Wrapper>
      <Calendar />
      {hasCurrentDayTasks ? <div>Show current day tasks</div> : <DayGreetings />}
      {hasCurrentDayTasks && (
        <div>
          <TextInput size="large" />
        </div>
      )}
    </Wrapper>
  );
}
