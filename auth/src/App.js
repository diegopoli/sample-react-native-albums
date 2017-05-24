import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  // This is a lifecycle method invoked immediately before mounting occurs,
  // during server rendering.
  componentWillMount() {
    // Firebase initialization
    firebase.initializeApp({
      apiKey: 'AIzaSyC9Zz7EKY2jQMDnryyoVqyauytCBSc7MNk',
      authDomain: 'react-native-albums-auth.firebaseapp.com',
      databaseURL: 'https://react-native-albums-auth.firebaseio.com',
      projectId: 'react-native-albums-auth',
      storageBucket: 'react-native-albums-auth.appspot.com',
      messagingSenderId: '332098616101'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>App</Text>
      </View>
    );
  }
}

export default App;
