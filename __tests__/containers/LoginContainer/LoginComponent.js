/**
 * @format
 */

import 'react-native';
import React from 'react';
import {LoginComponent} from '../../../src/containers/LoginContainer/LoginContainer';

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

describe('Testing  LoginComponent component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <LoginComponent />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <LoginComponent />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
