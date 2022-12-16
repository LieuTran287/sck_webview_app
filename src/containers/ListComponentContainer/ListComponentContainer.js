'use strict'

import React from 'react'
import {connect} from 'react-redux'
import ListComponent from './views/index'

// Define which part of the state we're passing to this component
const mapStateToProps = (state) => ({})

// Define the actions this component may dispatch
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export {ListComponent}

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
