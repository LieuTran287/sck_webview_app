/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ListComponent} from '../../../src/containers/ListComponentContainer/ListComponentContainer';

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

describe('Testing  ListComponent component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <ListComponent />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <ListComponent />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
