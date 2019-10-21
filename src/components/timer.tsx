import React, { useState, useEffect } from 'react';
import styled from '../styled';
import { formatTime } from '../utils/utils';

const Time = styled.h1`
  font-size: 100px;
  font-family: ${({ theme }) => theme.font.semi};
  color: #000;
  font-weight: 900;
  padding: 0;
  margin: 0;
`;

// TODO: Accept timezone with the timing function
export default function Timer() {
  const [time, setTime] = useState(formatTime(new Date()));

  function updateClock() {
    const formattedTime = formatTime(new Date());
    setTime(formattedTime);
  }

  useEffect(() => {
    const tickTimer = setInterval(() => {
      updateClock();
    }, 1000);
    return () => {
      if (tickTimer) {
        clearInterval(tickTimer);
      }
    };
  }, []);

  return <Time>{time}</Time>;
}
