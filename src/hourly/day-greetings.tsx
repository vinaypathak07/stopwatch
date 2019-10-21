import React from 'react';
import styled from '../styled';

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Time = styled.h1`
  font-size: 100px;
  font-family: ${({ theme }) => theme.font.semi};
  color: #000;
  font-weight: 900;
`;

const Greeting = styled.h5`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.medium};
  color: #000;
  font-weight: 400;
`;

export default function DayGreetings() {
  return (
    <Wrapper>
      <Time>12:03</Time>
      <Greeting>Good afternoon, Quadri.</Greeting>
    </Wrapper>
  );
}
