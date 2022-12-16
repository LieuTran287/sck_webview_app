import React, {Component} from 'react'
import {View, ImageBackground, Image, Platform, TextInput, Text, TouchableOpacity, ScrollView} from 'react-native';
import ButtonRN from "react-native/Libraries/Components/Button";
import Images from '../../../themes/Images'
import {Button, Avatar, SectionHeader} from "../../../components/commons";
import {GroupButton} from "../../../components/modules";
import {UserControl} from "../../../components/hocs";
import styles from './styles'
import * as navigationStack from '../../../navigation/navigationStack';
import I18n from "../../../I18n";
import {ButtonDoc, AvatarDoc, GroupButtonDoc} from "../../../components/documents";
import EStyleSheet from "react-native-extended-stylesheet";

function CheckBox({title, checked, onValueChange}) {
  return (
    <TouchableOpacity
      onPress={() => {
        onValueChange(!checked)
      }}
    >
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <Text style={{marginRight: 15}}>{title}</Text>
        <View style={[{
          height: 22,
          width: 22,
          borderColor: "#39b1ff",
          borderWidth: 0.5,
          borderRadius: 45,
          padding: 3,
        }]}>
          <View style={checked && {
            borderRadius: 45,
            backgroundColor: "#39b1ff",
            flex: 1
          }}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}


export default class ListComponent extends Component {
  constructor(props) {
    super(props)
    this.docs = [ButtonDoc,AvatarDoc,GroupButtonDoc];
    this.state = this.initDataDemo(this.docs);
    this.components = this.getComponentNeedRender(this.docs);
  }

  componentDidMount() {
  }

  initDataDemo(docs) {
    const newState = {};
    docs.map(doc => {
      const {demo, key} = doc;
      const {selection, options, input} = demo;
      newState[key] = {show: false};
      newState[key].selectionIndex = -1;
      newState[key].selection = selection || [];
      newState[key].options = [];
      options.map(op => {
        newState[key].options.push({name: op.name, selected: false});
      })
      newState[key].inputs = [];
      input.map(inp => {
        newState[key].inputs.push({key: inp.name, type: inp.type, value: inp.type ==="array" ? [] : "", length: 0})
      })
    })
    return newState;
  }

  getComponentNeedRender(docs) {
    let array = [];
    docs.map(doc => {
      const {demo, key, render} = doc;
      const {selection, options, input} = demo;
      array.push({key, render});
    })
    return array;
  }

  renderComponents(comps, state) {
    return comps.map(comp => {
      const propsFromState = state[comp.key];

      const propsToPassComponent = {};
      const {inputs, options, selectionIndex, selection, show} = propsFromState;
      const InputComp = [];
      const OptionsComp = [];
      const SectionComp = [];
      inputs.map((inp, key) => {
        propsToPassComponent[inp.key] = inp.value;
        if (inp.type ==="array") {
          InputComp.push(<TextInput placeholder={"input length of " + inp.key}
                                    style={stylesLocal.input}
                                    keyboardType={"numeric"}
                                    onChangeText={(text) => {

                                      try {
                                        inputs[key].length = parseInt(text);
                                        this.setState(
                                          prevState => ({
                                            [comp.key]: {
                                              ...prevState[comp.key],
                                              inputs: [...inputs]
                                            }
                                          }),
                                        );
                                      } catch (err) {

                                      }
                                    }}/>);

          for (let i = 0; i < inp.length; i++) {
            InputComp.push(<TextInput placeholder={"input index " + i}
                                      style={stylesLocal.input}
                                      onChangeText={(text) => {

                                        try {
                                          inputs[key].value[i] = text;
                                          this.setState(
                                            prevState => ({
                                              [comp.key]: {
                                                ...prevState[comp.key],
                                                inputs: [...inputs]
                                              }
                                            }),
                                          );
                                        } catch (err) {

                                        }
                                      }}/>);
          }

        }
        else {
          InputComp.push(<TextInput placeholder={"input " + inp.key}
                                    style={stylesLocal.input}
                                    onChangeText={(text) => {
                                      try {
                                        inputs[key].value = text;
                                        this.setState(
                                          prevState => ({
                                            [comp.key]: {
                                              ...prevState[comp.key],
                                              inputs: [...inputs]
                                            }
                                          }),
                                        );
                                      } catch (err) {

                                      }
                                    }}/>)
        }


      });

      options.map((op, index) => {
        propsToPassComponent[op.name] = op.selected;
        OptionsComp.push(<View style={{padding: 5}}>
            <CheckBox
              title={op.name}
              checked={op.selected}
              onValueChange={(value) => {
                options[index].selected = value;
                this.setState(
                  prevState => ({
                    [comp.key]: {
                      ...prevState[comp.key],
                      options: [...options]
                    }
                  }),
                );
              }}
            />
          </View>
        )
      });
      selection.map((se,index) => {
        propsToPassComponent[se.name] = selectionIndex === se.index ? true : false;
        SectionComp.push(
          <View style={{padding: 5}}>
            <CheckBox
              title={se.name}
              checked={selectionIndex === se.index ? true : false}
              onValueChange={(value) => {

                this.setState(
                  prevState => ({
                    [comp.key]: {
                      ...prevState[comp.key],
                      selectionIndex: index === prevState[comp.key].selectionIndex ? -1 : index
                    }
                  }),
                );
              }}
            />
          </View>
        )

      });
      return <View>
        <TouchableOpacity style={stylesLocal.sectionHeader}
                          onPress={() => {
                            this.setState(
                              prevState => ({
                                [comp.key]: {
                                  ...prevState[comp.key],
                                  show: !prevState[comp.key].show
                                }
                              }),
                            );
                          }}
        >
          <View style={{flexDirection: "row", flex: 1, alignItems: "center", justifyContent: "space-between"}}>
            <Text style={stylesLocal.sectionHeaderTitle}>{comp.key}</Text>
            <View style={[stylesLocal.arrowContainer, show ? stylesLocal.arrowUp : stylesLocal.arrowDown]}/>
          </View>
        </TouchableOpacity>
        {
          show ?
            <View style={{padding: 10}}>
              {InputComp}
              {SectionComp.length > 0 ?
                <View style={stylesLocal.sectionHeaderSecondLv}><Text style={stylesLocal.sectionHeaderTitleSecondLv}>Select :</Text></View> : null

              }
              {SectionComp.length > 0 &&
              <View style={{flexDirection: "row", justifyContent: "center", flexWrap: 'wrap'}}>{SectionComp}</View>}
              {OptionsComp.length > 0 ?
                <View style={stylesLocal.sectionHeaderSecondLv}><Text style={stylesLocal.sectionHeaderTitleSecondLv}>Options :</Text></View> : null
              }
              {OptionsComp.length > 0 &&
              <View style={{flexDirection: "row", justifyContent: "center", flexWrap: 'wrap'}}>{OptionsComp}</View>}
              <View style={stylesLocal.sectionHeaderSecondLv}>
                <Text style={stylesLocal.sectionHeaderTitleSecondLv}>Demo:</Text></View>

              {comp.render(propsToPassComponent)}

            </View> : null
        }

      </View>
    })
  }

  render() {
    return (
      <View style={styles().container}>
        <ButtonRN title ={"Back"} onPress = {() =>(this.props.navigation.goBack())}/>
        <ScrollView>

          {
            this.renderComponents(this.components, this.state)
          }
        </ScrollView>
      </View>
    )
  }
}

const stylesLocal = EStyleSheet.create({
  sectionHeader: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0,0,0,0.6)"
    // flexDirection:"row"
  },

  sectionHeaderTitle: {
    fontSize: 18,
    color: "#39b1ff",
    fontWeight: "600"
  },

  arrowContainer: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: "gray",
    borderBottomColor: "gray"
  },

  arrowUp: {
    borderBottomWidth: 15,
  },

  arrowDown: {
    borderTopWidth: 15,
  },

  sectionHeaderSecondLv: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },

  sectionHeaderTitleSecondLv: {
    fontSize: 14,
    color: "#39b1ff",
    fontWeight: "500"
  },

  input: {
    height: 45,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.6)",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5
  }


})

