import React from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from './reducers';

const devTools = process.env.NODE_ENV == 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__() : {}

export const store = applyMiddleware(promise, thunk)(createStore)(rootReducer, devTools)

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
        <StatusBar translucentbackgroundColor="#000"
          barStyle="light-content" />
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>

    );
  }
}

export default Start;

