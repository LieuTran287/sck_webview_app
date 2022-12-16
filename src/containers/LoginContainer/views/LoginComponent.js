import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform} from 'react-native'
import Images from '../../../themes/Images'
import {Button} from "../../../components/commons";
import styles from './styles'
import * as navigationStack from '../../../navigation/navigationStack';
import I18n from "../../../I18n";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  onLogInClick = () => {
    this.props.testActions.getTestData({user: "octokit", repo: "octokit.rb"}).then(res => {
      this.props.navigation.replace(navigationStack.HOME_SCREEN);
    })
  }

  render() {
    return (
      <View style={styles().container}>
        <ImageBackground source={Images.splash} style={styles().splash}>
          <View style={styles().logoWrapper}>
            <Image source={Images.logo}/>
          </View>

          <View style={styles().bodyWrapper}>
            <Button text={"View Components"} onPress={() => {
              this.props.navigation.navigate(navigationStack.LIST_COMPONENT_SCREEN);
            }}/>
            <View style ={{marginTop: 10}}/>
            <View style={styles().loginWrapper}>
              <Button
                onPress={this.onLogInClick}
                text={I18n.t("login_page.login")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

