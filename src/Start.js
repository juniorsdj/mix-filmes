import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import rootReducer from './reducers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
});

class Start extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text>Oi</Text>
      </View>
    );
  }
}

export default Start;

