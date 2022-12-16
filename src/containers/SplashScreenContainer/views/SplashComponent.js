import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform, Text, TouchableOpacity} from 'react-native'
import styles from './styles';
import Images from '../../../themes/Images';
import * as navigationStack from '../../../navigation/navigationStack';
import AsyncStorage from "@react-native-community/async-storage";


export default class SplashComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() {
    AsyncStorage.getItem("persist:root").then(str => {
      const object = JSON.parse(str);
      if (JSON.parse(JSON.parse(object.testReducer)).data.data) {
        this.props.navigation.replace(navigationStack.HOME_SCREEN);
      }
      else {
        this.props.navigation.replace(navigationStack.LOGIN_SCREEN);
      }
    }).catch(() => {
      this.props.navigation.replace(navigationStack.LOGIN_SCREEN);
    })
  }

  render() {
    return (
      <View style={styles().container}>
        <ImageBackground source={Images.splash} style={styles().splash}>
        </ImageBackground>
      </View>
    )
  }
}

