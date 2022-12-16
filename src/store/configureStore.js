import { createStore, applyMiddleware, compose } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore ,persistReducer} from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import Immutable, { isImmutable } from 'immutable';
import AppReducer from '../reducers/'
import thunk from 'redux-thunk';


export default function configureStore() {
  const persistConfig = {
    transforms: [immutableTransform()],
    key: 'root',

    storage: AsyncStorage,
    // whitelist: ['userReducer','languageReducer' ],
    // blacklist: [],
  };
  const middleware = [thunk];
  const enhancers = [];


  const stateTransformer = state => {
    let temState = {...state};
     Object.keys(state).forEach((key,index) => {
      if (isImmutable(state[key])) {
        temState[key] = state[key].toJS()
      }  else  {
        temState[key] = state[key];
      } ;
    });

    return temState;
  };

  if (__DEV__) {
    middleware.push(
      createLogger({
        stateTransformer,
      }),
    );
  }

  enhancers.push(applyMiddleware(...middleware) );

  const persistedReducer = persistReducer(persistConfig, AppReducer);
  const store = createStore(persistedReducer ,  compose(...enhancers));

  let persistor = persistStore(store);
  return {store,persistor};
}
