import React, {Component} from 'react';
import styles from "./styles";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {Button} from "../../commons";

export default function GroupButton({index, data = [], onSelect}) {
  return (
    <View style={styles().container}>
      {
        data.map((title, _index) => {
          const status = index === _index ? "active" : "deactive";
          return  <Button  key={_index} text={title} disabled={status === "active" ? false : true} full onPress={() => {
            onSelect(_index);
          }}/>
        })
      }
    </View>);
}

export class Document {

  static key = "GroupButton"

  static render = GroupButton

  static demo = {
    selection :[],
    options :[],
    input: [{name: "index", type :"num"},{name:"data", type : "array"}]
  }
}


