/**
 * @format
 */

import 'react-native';
import React from 'react';
import SectionHeader from '../../../src/components/commons/SectionHeader';
import { shallow } from 'enzyme';

// Note: test renderer must be required after react-native.
import EStyleSheet from 'react-native-extended-stylesheet';
import renderer from "react-test-renderer";


const originalLog = console.log;

beforeAll(() => {
  console.log = jest.fn();
  EStyleSheet.build({

  });
});

afterAll(() => {
  console.log = originalLog;
});
describe('Testing  SectionHeader component', () => {

  it('renders snapshot as expected', () => {
    const wrapper = renderer.create(
      <SectionHeader text={"Ex: SectionHeader"}/>
    );

    expect(wrapper).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = shallow(
      <SectionHeader text ="Ex: SectionHeader" />
    );

    expect(wrapper).toMatchSnapshot();

  });

});
