import React, {Component} from 'react'
import {
  View,
  StatusBar, TouchableOpacity, Text,
} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';


import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from '../navigation/navigationStack'
import globalStyles from '../styles/global'
import EStyleSheet from 'react-native-extended-stylesheet';
import I18n from '../I18n/I18n';
import Colors from "../themes/Colors";
import GlobalStore from "../themes/GlobalStore";
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import NotificationController from "../firebase/notification/index";
EStyleSheet.build(globalStyles);

import * as crashlytics from '../firebase/crashlytics';
import SplashScreen from "react-native-splash-screen";

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      store: null,
      persistStore: null,
    };

  }

  async componentDidMount() {
    I18n.locale = this.props.languageState ? this.props.languageState.name : 'vi';
    const {settingsState: {theme}} = this.props;
    GlobalStore.theme = theme;
    GlobalStore.color = Colors(theme);

    crashlytics.init();

    SplashScreen.hide();
  }



  render() {
    console.disableYellowBox = true;
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <NavigationStack/>
          <NotificationController/>
        </NavigationContainer>
      </SafeAreaProvider>

    )
  }
}

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  languageState: state.languageReducer.toJS(),
  settingsState: state.settingsReducer.toJS(),
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return Object.assign({dispatch: dispatch},)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

