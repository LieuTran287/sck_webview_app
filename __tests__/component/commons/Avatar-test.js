/**
 * @format
 */

import 'react-native';
import React from 'react';
import Avatar from '../../../src/components/commons/Avatar';

// Note: test renderer must be required after react-native.
import {mount, shallow} from 'enzyme';
import renderer from  "react-test-renderer";
import EStyleSheet from 'react-native-extended-stylesheet';


const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn();
  EStyleSheet.build({
  });
});

afterAll(() => {
  console.error = originalError;
});

describe('Testing  Avatar component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <Avatar text={"H"}/>
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <Avatar text={"H"}/>
    );

    expect(wrapper).toMatchSnapshot();

  });

});
