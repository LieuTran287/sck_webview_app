import React, {Component} from 'react'
import {View, Text} from 'react-native'
import styles from './styles';
import I18n from '../../../I18n'

export default class MessageComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles().container}>
        <Text style={styles().text}>{I18n.t('message_page.title_page')} </Text>
      </View>
    )
  }
}

