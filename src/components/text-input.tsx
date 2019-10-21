import React from 'react';
import { Plus } from 'react-feather';
import TextareaAutosize from 'react-textarea-autosize';

import styled from '../styled';

interface InputProps {
  size: 'large' | 'compact';
}

const Wrapper = styled('div')<InputProps>(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'middle',
    minHeight: '45px',
    borderRadius: '6px',
    padding: '10px',
    boxShadow: '0 0 60px #e4e7eb',
    border: '1px solid #eceff5',
    width: '100%',
    backdropFilter: 'blur(4px)',
  },
  props => ({
    backgroundColor: '#fff',
    color: '#9CA6B4',
    minWidth: props.size === 'compact' ? '280px' : '100%',
  }),
);

const IconWrapper = styled.span`
  padding: 2px 5px 1px;
`;

const Input = styled(TextareaAutosize)`
  background: transparent;
  line-height: 16px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.medium};
  font-weight: 400;
  width: 100%;
  color: #9ca6b4;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    color: #9ca6b4;
    font-weight: 400;
  }
`;

export default function TextInput(props: InputProps) {
  return (
    <Wrapper {...props}>
      <IconWrapper>
        <Plus size={16} />
      </IconWrapper>
      <Input
        minRows={1}
        maxRows={3}
        maxLength={100}
        placeholder="What are you gonna do?"
        spellCheck
      />
    </Wrapper>
  );
}
