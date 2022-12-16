import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutContainer from '../containers/AboutContainer/AboutContainer';
import MessageContainer from '../containers/MessageContainer/MessageContainer';
import SettingsContainer from '../containers/SettingsContainer/SettingsContainer';

const Tab = createBottomTabNavigator();

export const MESSAGE_SCREEN = "Message";
export const ABOUT_SCREEN = "About";
export const SETTINGS_SCREEN = "Settings";

function TabStack() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name={MESSAGE_SCREEN} component={MessageContainer}/>
      <Tab.Screen name={ABOUT_SCREEN} component={AboutContainer}/>
      <Tab.Screen name={SETTINGS_SCREEN} component={SettingsContainer}/>
    </Tab.Navigator>
  );
}


export default TabStack
