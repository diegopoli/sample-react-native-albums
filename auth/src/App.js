import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null, username: '' };

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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, username: user.email });
      } else {
        this.setState({ loggedIn: false, username: '' });
      }
    });
  }

  renderContent() {
    const { welcomeMessageTextStyle, usernameTextStyle } = styles;

    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Text style={welcomeMessageTextStyle}>
                Welcome, <Text style={usernameTextStyle}>{this.state.username}</Text>!
              </Text>
            </CardSection>

            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  welcomeMessageTextStyle: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5
  },
  usernameTextStyle: {
    fontWeight: 'bold'
  }
};

export default App;
