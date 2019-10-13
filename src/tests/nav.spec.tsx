import renderer from 'react-test-renderer';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../theme';
import { Nav, NavFooter, LogoDropdown } from '../components/nav';

describe('<Nav />', () => {
  let ThemeWrapper;
  beforeEach(() => {
    ThemeWrapper = (props: { children: ReactNode }) => (
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    );
  });
  it('renders without correctly', () => {
    expect(
      renderer
        .create(
          <ThemeWrapper>
            <Nav />
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
