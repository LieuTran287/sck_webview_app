import React, {Component} from 'react'
import {View, Text, Switch, Button} from 'react-native'
import styles from './styles';
import I18n from '../../../I18n/I18n'
import {CommonActions} from '@react-navigation/native';
import {DARK_MODE, LIGHT_MODE} from "../../../themes/Colors";
import {SPLASH_SCREEN} from "../../../navigation/navigationStack";
import AsyncStorage from "@react-native-community/async-storage";

export default class SettingsComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {settingsState: {theme}, settingsActions, languageState: {name: langName}} = this.props;
    return (
      <View style={[styles().container]}>
        <Text style={styles().text}>{I18n.t("settings_page.title_page")}</Text>
        <Text style={styles().text}>{I18n.t("settings_page.change_theme")}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={styles().text}>{I18n.t("settings_page.light_mode")}</Text>
          <Switch value={LIGHT_MODE === theme ? false : true} onValueChange={value => {
            settingsActions.changeTheme({theme: value === true ? DARK_MODE : LIGHT_MODE});
          }}/>
          <Text style={styles().text}>{I18n.t("settings_page.dark_mode")}</Text>
        </View>

        <Text style={styles().text}>{I18n.t("settings_page.change_language")}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={styles().text}>EN</Text>
          <Switch
            value={langName === "vi" ? true : false}
            onValueChange={value => {
              this.props.languageAction.changeLanguage(value === true ? "vi" : "en");
            }}/>
          <Text style={styles().text}>VI</Text>
        </View>

        <Button
          title={I18n.t("settings_page.logout")}
          onPress={ async() => {
            await AsyncStorage.clear();
            this.props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {name: SPLASH_SCREEN},
                ],
              })
            );

          }}
        >

        </Button>
      </View>
    )
  }
}

