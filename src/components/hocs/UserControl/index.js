import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./styles";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {GroupButton} from "../../modules";
import {Avatar} from "../../commons";

export default function UserControl({active}) {
  const [_active, setActive] = useState(active);

  return (
    <View style={styles().container}>
      <Avatar text={"H"}/>
      <GroupButton index={_active ? 0 : 1} data={["Deactive User", "Active User"]} onSelect={(index) => {
        setActive(index === 0 ? true : false);
      }}/>
    </View>);
}


