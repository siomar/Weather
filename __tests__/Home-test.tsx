/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/pages/Home';
import {render, cleanup} from '@testing-library/react-native';

import renderer from 'react-test-renderer';
jest.mock('react-native-geolocation-service', () => jest.fn());

const tree = renderer.create(<Home />);

afterEach(cleanup);

describe('Home tests', () => {
  test('create snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should find the button via testId', () => {
    const id = 'pressButton';

    const {getByTestId} = render(<Home />);

    const foundButton = getByTestId(id);

    expect(foundButton).toBeTruthy();
  });
});
