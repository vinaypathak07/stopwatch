import renderer from 'react-test-renderer';
import React from 'react';
import GlobalStyles from '../global';

describe('global styles', () => {
  it('renders without correctly', () => {
    expect(renderer.create(<GlobalStyles />).toJSON()).toMatchSnapshot();
  });
});
