'use strict'

import React from 'react'
import {connect} from 'react-redux'
import LoginComponent from './views/index'
import * as testActions from '../../actions/testActions'
import {bindActionCreators} from 'redux';

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    testActions: bindActionCreators(testActions, dispatch),
  }
}

export {LoginComponent}
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
