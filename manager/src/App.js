import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAvnPpRCXiN0fnSb7paxOc8oD0tRrxTF5Q',
      authDomain: 'manager-5dc90.firebaseapp.com',
      databaseURL: 'https://manager-5dc90.firebaseio.com',
      projectId: 'manager-5dc90',
      storageBucket: 'manager-5dc90.appspot.com',
      messagingSenderId: '1099414051416'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
