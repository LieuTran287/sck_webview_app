import React, { Component } from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider} from 'react-redux'
import App from './AppContainer'
import appReducer from '../reducers/index'
import I18n from "../I18n/I18n";
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from "../store/configureStore";
// import SplashScreen from 'react-native-smart-splash-screen'



const {store,persistor}  =  configureStore();

export default class AppContainer extends Component {
  constructor (props) {
    super(props)
  }


  async componentDidMount() {
    // const {store ,persistStore} = await configureStore();
    //
    // this.setState({ store,persistStore });

    // SplashScreen.close({
    //   animationType: SplashScreen.animationType.scale,
    //   duration: 850,
    //   delay: 500
    // })
  }


  render () {
    return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>

    )
  }
}
