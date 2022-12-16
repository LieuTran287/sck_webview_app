import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform, Text} from 'react-native';

import styles from './styles';
import I18n from '../../../I18n/I18n';

export default class AboutComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }




  render () {
    return (
      <View style={styles().container}>
        <Text style={styles().text}>{I18n.t('about_page.title_page')} </Text>
      </View>
    )
  }
}

