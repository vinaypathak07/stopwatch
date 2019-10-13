import React, { ReactNode } from 'react';
import { ChevronDown } from 'react-feather';
import {
  Menu,
  MenuPrimary,
  MenuBackground,
  MenuContainer,
  LogoWrapper,
  TabWrapper,
  LogoArrow,
  LogoContainer,
} from './components';
import LogoDropdown from './logo-dropdown';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import NavFooter from './footer';

export default function Nav(props: { children: ReactNode }) {
  return (
    <Menu>
      <MenuPrimary>
        <MenuBackground />
        <MenuContainer>
          <LogoWrapper>
            <LogoDropdown />
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <LogoArrow>
              <ChevronDown strokeWidth={1} size={12} />
            </LogoArrow>
          </LogoWrapper>
          <TabWrapper>{props.children}</TabWrapper>
          <NavFooter />
        </MenuContainer>
      </MenuPrimary>
    </Menu>
  );
}
