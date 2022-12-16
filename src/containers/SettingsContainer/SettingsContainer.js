'use strict'

import React from 'react'
import {connect} from 'react-redux'
import SettingComponent from './views/index'
import {bindActionCreators} from 'redux'
import * as languageAction from '../../actions/languageAction';
import * as settingsActions from '../../actions/settingsActions';


// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  settingsState: state.settingsReducer.toJS(),
  languageState: state.languageReducer.toJS()
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    languageAction: bindActionCreators(languageAction, dispatch),
    settingsActions: bindActionCreators(settingsActions, dispatch),
  }
}

export  {SettingComponent}
export default connect(mapStateToProps, mapDispatchToProps)(SettingComponent)
