import React, { ReactNode } from 'react';
import { TabList, Tab } from 'react-tabs';
import styled from '../styled';

export const CustomTabList = styled(TabList)`
  margin: 0;
  padding: 0;
  width: 70px;
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
CustomTabList.tabsRole = 'TabList';

const CustomTab = styled(Tab)`
  margin: 0;
  padding: 0;
  width: 100%;
  cursor: pointer;
`;

interface TabProps {
  selected: boolean;
}

const TabWrapper = styled.a`
  position: relative;
  display: inline-block;
  height: 70px;
  width: 70px;
  line-height: 70px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    & > div {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
    }

    & > div > span {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const TabInner = styled('div')<TabProps>(
  {
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    margin: '0 15px',
    verticalAlign: 'middle',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '12px',
    transition: 'color 0.2s, background-color 0.2s',
    '& svg': {
      verticalAlign: 'middle',
    },
  },
  props => ({
    backgroundColor: props.selected ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
  }),
);

const TabLabel = styled.span`
  position: absolute;
  left: 100%;
  top: 50%;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  margin-top: -13px;
  margin-left: 10px;
  background: #bac3d0;
  color: #fff;
  padding: 0 7px;
  border-radius: 6px;
  font-size: 11px;
  font-family: ${({ theme }) => theme.font.regular};
  white-space: nowrap;
  opacity: 0;
  transform: scale(0.7);
  transform-origin: left center;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s, -webkit-transform 0.2s;

  &::before {
    position: absolute;
    top: 50%;
    left: -3px;
    margin-top: -3px;
    content: '';
    display: inline-block;
    border-top: 3px solid transparent;
    border-right: 3px solid #bac3d0;
    border-bottom: 3px solid transparent;
  }
`;

export const CustomTabComponent = ({
  children,
  selected,
  label,
  ...props
}: {
  children: ReactNode;
  selected?: boolean;
  label: string;
}) => {
  return (
    <CustomTab {...props}>
      <TabWrapper href="#">
        <TabInner selected={selected || false}>
          {children}
          <TabLabel>{label}</TabLabel>
        </TabInner>
      </TabWrapper>
    </CustomTab>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
CustomTabComponent.tabsRole = 'Tab';
