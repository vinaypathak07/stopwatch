import React from 'react';
import { Sun, Minimize } from 'react-feather';

import styled from '../../styled';

export const FooterWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const FooterItemWrapper = styled.span`
  position: relative;
  display: inline-block;
  line-height: 70px;
  height: 100%;
  white-space: nowrap;
`;

export const FooterItem = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 0 15px;
  vertical-align: middle;
  color: #fff;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s, color 0.2s, -webkit-transform 0.2s;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const FooterItemIcon = styled.span`
  position: relative;
  display: inline-block;
  color: #fff;
  width: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  z-index: 1;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s, color 0.2s, -webkit-transform 0.2s;
  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  & > svg {
    cursor: pointer;
  }
`;

function ThemeSwitcher() {
  return (
    <FooterItemWrapper>
      <FooterItem>
        <FooterItemIcon>
          <Sun strokeWidth={1.5} size={24} />
        </FooterItemIcon>
      </FooterItem>
    </FooterItemWrapper>
  );
}

function WindowSwitcher() {
  return (
    <FooterItemWrapper>
      <FooterItem>
        <FooterItemIcon>
          <Minimize strokeWidth={1.5} size={24} />
        </FooterItemIcon>
      </FooterItem>
    </FooterItemWrapper>
  );
}

export default function NavFooter() {
  return (
    <FooterWrapper>
      <WindowSwitcher />
      <ThemeSwitcher />
    </FooterWrapper>
  );
}
