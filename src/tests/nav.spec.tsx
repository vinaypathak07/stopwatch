import renderer from 'react-test-renderer';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Nav, NavFooter, LogoDropdown } from '../components/nav';

const ThemeWrapper = (props: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

describe('<Nav />', () => {
  it('renders without correctly', () => {
    expect(
      renderer
        .create(
          <ThemeWrapper>
            <Nav>children</Nav>
          </ThemeWrapper>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('renders footer correctly', () => {
    expect(
      renderer
        .create(
          <ThemeWrapper>
            <NavFooter />
          </ThemeWrapper>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });

  it('renders logo dropdown correctly', () => {
    expect(
      renderer
        .create(
          <ThemeWrapper>
            <LogoDropdown />
          </ThemeWrapper>,
        )
        .toJSON(),
    ).toMatchSnapshot();
  });
});
