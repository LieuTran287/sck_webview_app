import React, {Component} from 'react'
import LoginContainer from '../containers/LoginContainer/LoginContainer'
import SplashScreenContainer from '../containers/SplashScreenContainer/SplashContainer'
import ListComponentContainer from '../containers/ListComponentContainer/ListComponentContainer'
import TabStack from './tabStack'
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
import {SafeAreaProvider, SafeAreaView, useSafeArea} from 'react-native-safe-area-context';

export const HOME_SCREEN = "Home";
export const LOGIN_SCREEN = "Login";
export const SPLASH_SCREEN = "Splash";
export const LIST_COMPONENT_SCREEN = "ListComponent";


function NavigationStack() {
  const insets = useSafeArea();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        headerMode={"none"}
      >
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreenContainer}/>
        <Stack.Screen name={LOGIN_SCREEN} component={LoginContainer}/>
        <Stack.Screen name={HOME_SCREEN} component={TabStack}/>
        <Stack.Screen name={LIST_COMPONENT_SCREEN} component={ListComponentContainer}/>
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default NavigationStack
