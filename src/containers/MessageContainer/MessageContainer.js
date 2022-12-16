'use strict'

import React from 'react'
import {connect} from 'react-redux'
import MessageComponent from './views/index'
import {bindActionCreators} from 'redux'
import * as languageAction from '../../actions/languageAction'

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({
  settingsState : state.settingsReducer.toJSON()
})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    languageAction: bindActionCreators(languageAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent)
