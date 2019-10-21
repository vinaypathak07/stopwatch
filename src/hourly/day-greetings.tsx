import React from 'react';
import styled from '../styled';
import { getCurrentMomentMessage } from '../utils/utils';
import Timer from '../components/timer';
import TextInput from '../components/text-input';

const Wrapper = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Greeting = styled.h5`
  font-size: 24px;
  font-family: ${({ theme }) => theme.font.medium};
  color: #000;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

const InputWrapper = styled.div`
  margin-top: 30px;
`;

export default function DayGreetings() {
  return (
    <Wrapper>
      <Timer />
      <Greeting>Good {getCurrentMomentMessage()}, Quadri.</Greeting>
      <InputWrapper>
        <TextInput size="compact" />
      </InputWrapper>
    </Wrapper>
  );
}
