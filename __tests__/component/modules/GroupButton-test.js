/**
 * @format
 */

import 'react-native';
import React from 'react';
import GroupButton from '../../../src/components/modules/GroupButton';

// Note: test renderer must be required after react-native.
import { mount } from 'enzyme';
import EStyleSheet from 'react-native-extended-stylesheet';
import renderer from "react-test-renderer";



const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn();
  EStyleSheet.build({
  });
});

afterAll(() => {
  console.error = originalError;
});

describe('Testing  GroupButton component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <GroupButton data={["button1", "button2"] } index ={1} />
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <GroupButton data={["button1", "button2"] } index ={1} />
    );

    expect(wrapper).toMatchSnapshot();
    const button1 = wrapper
      .findWhere((w) => w.prop('text') === 'button1')
      .first();
    const button2 = wrapper
      .findWhere((w) => w.prop('text') === 'button2')
      .first();
    expect(button1.prop('disabled') ).toEqual(true);
    expect(button2.prop('disabled') ).toEqual(false);

  });

});
