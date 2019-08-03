import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from './reducers';

const devTools = process.env.NODE_ENV == 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__() : {}

export const store = applyMiddleware(promise, thunk)(createStore)(rootReducer, devTools)

import Home from './components/Home'
import Navigator from './Navigator'



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Start extends React.Component {

  componentDidMount() { }

  render() {
    return (
      <Provider store={store}>
        <View
          style={styles.container}
        // forceInset={{ horizontal: 'always', top: 'always' }}
        >
          {/* <StatusBar backgroundColor={colors.brandDark} /> */}
          {/* <StatusBarComponent /> */}
          <Navigator />


        </View>


      </Provider>

    );
  }
}

export default Start;

