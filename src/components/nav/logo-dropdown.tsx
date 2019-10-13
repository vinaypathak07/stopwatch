import React from 'react';
import { Info, HelpCircle, Meh, LogOut } from 'react-feather';

import styled from '../../styled';

export const Dropdown = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  background: #fff;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.15);
  border-radius: 0 0 12px;
  z-index: 99;
  opacity: 0;
  overflow: auto;
  transform: translate3d(-60px, 0, 0);
  transition: transform 0.2s, opacity 0.2s, -webkit-transform 0.2s;
  pointer-events: none;
`;

export const SectionWrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #f3f5f8;
  justify-content: flex-end;
  display: flex;
  white-space: nowrap;

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Title = styled(SectionWrapper)`
  padding: 10px 0;
  border-bottom: 1px solid #f3f5f8;

  & h2 {
    font-family: ${({ theme }) => theme.font.regular};
    font-size: 25px;
    color: #000;
    margin: 0;
    padding: 0;
    margin-bottom: 5px;
  }

  & span {
    font-size: 11px;
    color: #b6bfcc;
    font-family: ${({ theme }) => theme.font.regular};
  }
`;

export const TitleSection = styled.div`
  padding: 15px 15px 10px;
  width: 73%;
`;

export const SectionItem = styled.span`
  width: 100%;
`;

export const SectionItemTitle = styled.p`
  color: #b6bfcc;
  font-size: 10px;
  font-family: ${({ theme }) => theme.font.medium};
  text-transform: uppercase;
  padding: 0 20px;
  margin-bottom: 8px;
`;

export const MenuItem = styled.a`
  display: block;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 12px;
  color: #768191;
  font-family: ${({ theme }) => theme.font.medium};
  text-align: left;
  white-space: nowrap;
  transition: color 0.2s;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:visited {
    color: #000;
    text-decoration: none;
  }

  span {
    display: inline-block;
    width: 22px;
    margin-right: 12px;
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    opacity: 0.7;
  }
`;

export default function LogoDropdown() {
  return (
    <Dropdown>
      <Title>
        <TitleSection>
          <h2>Stopwatch</h2>
          <span>Track time like a thing</span>
        </TitleSection>
      </Title>
      <SectionWrapper>
        <SectionItem>
          <SectionItemTitle>Menu</SectionItemTitle>
          <MenuItem href="#">
            <span>
              <Info size={18} />
            </span>
            About Stopwatch
          </MenuItem>
          <MenuItem href="#">
            <span>
              <HelpCircle size={18} />
            </span>
            Help
          </MenuItem>
          <MenuItem href="#">
            <span>
              <Meh size={18} />
            </span>
            Report Issue
          </MenuItem>
          <MenuItem href="#">
            <span>
              <LogOut size={18} />
            </span>
            Quit Window
          </MenuItem>
        </SectionItem>
      </SectionWrapper>
    </Dropdown>
  );
}
