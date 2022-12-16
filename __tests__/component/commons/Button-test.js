/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from '../../../src/components/commons/Button';

// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme';
import EStyleSheet from 'react-native-extended-stylesheet';
import renderer from  "react-test-renderer";

beforeAll(() => {
  EStyleSheet.build({

  });
});
const originalLog = console.log;

beforeAll(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
});
describe('Testing  Button component', () => {
  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <Button text ="Ex: Button" />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = shallow(
      <Button text ="Ex: Button" />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
