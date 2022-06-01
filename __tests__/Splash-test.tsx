import 'react-native';
import React from 'react';
import Splash from '../src/pages/Splash';

import renderer from 'react-test-renderer';
jest.useFakeTimers();

const tree = renderer.create(<Splash navigation={undefined} />);

describe('Home tests', () => {
  test('create snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
  it('should renders correctly', () => {
    renderer.create(<Splash navigation={undefined} />);
  });
});
