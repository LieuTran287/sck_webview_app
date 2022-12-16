import React, {Component} from 'react';
import styles from "./styles";
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default function Button({onPress = ()=>{}, text ="", round, disabled, full} = {}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled ={disabled}
      style={[full ? null: styles().wrap, styles().general, round && styles().round,disabled ? styles().disabled: null]}
    >
      <Text numberOfLines={1} style={styles().text}>{text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

export class Document {

  static key ="Button"

  static render = Button

  static demo = {
    selection :[{name : "disabled",index: 0}],
    options :[{name :"round"},{name:"full"}],
    input :[{name :"text"}]
  }
}






