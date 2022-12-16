/**
 * @format
 */

import 'react-native';
import React from 'react';
import UserControl from '../../../../src/components/hocs/UserControl';
import GroupButton from '../../../../src/components/modules/GroupButton';

// Note: test renderer must be required after react-native.
import {mount, shallow} from 'enzyme';
import renderer from  "react-test-renderer";
import EStyleSheet from 'react-native-extended-stylesheet';

import {Button} from "../../../../src/components/commons/";


const originalError = console.error;

beforeAll(() => {
  console.error = jest.fn();
  EStyleSheet.build({
  });
});

afterAll(() => {
  console.error = originalError;
});

describe('Testing  UserControl component', () => {

  it('renders snapshot as expected', () => {
    const componentRender = renderer.create(
      <UserControl active={true}/>
    );

    expect(componentRender).toMatchSnapshot();

  });

  it('renders as expected', () => {
    const wrapper = mount(
      <UserControl active={true}/>
    );

    expect(wrapper).toMatchSnapshot();
    expect( wrapper
      .findWhere((w) => w.prop('text') === 'Deactive User')
      .first().prop('disabled') ).toEqual(false);
    expect( wrapper
      .findWhere((w) => w.prop('text') === 'Active User')
      .first().prop('disabled') ).toEqual(true);


    const button1 = wrapper.find(Button).first();
    expect(button1.prop('text')).toEqual('Deactive User');
    expect(button1.prop('disabled') ).toEqual(false);
    const button2 = wrapper.find(Button).last();
    expect(button2.prop('text')).toEqual('Active User');
    expect(wrapper.find(GroupButton).prop('index')).toEqual(0);
    button2.simulate("click");
    expect(wrapper.find(GroupButton).prop('index')).toEqual(1);


  });

});
