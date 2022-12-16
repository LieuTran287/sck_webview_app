import React, {Component} from 'react';
import styles from "./styles";
import {
  Text,
  View,
} from 'react-native';

export default function SectionHeader({url, text}) {
  return (
    <View style={styles().container}>
      <Text style={styles().text}>{text}</Text>
    </View>);
}


