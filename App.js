import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Cat from './src/Cat';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#ADD8E6"
          barStyle="light-content"
        />
        <View  style={styles.menuBar}>
          <Text style={styles.header}>Tinder For Cats</Text>
        </View>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Cat />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBar: {
    paddingTop: 0,
    backgroundColor: '#ADD8E6',
    height: 30,
    width: 1000,
  },
  header: {
    fontSize: 20,
    color: 'white'
  },
});
