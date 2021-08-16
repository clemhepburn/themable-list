import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';


describe('Header component', () => {

  afterEach(() => cleanup());

  test('renders Header', async () => {
    const { asFragment } = await render(
      <Header />);

    expect(asFragment()).toMatchSnapshot();
  });

});