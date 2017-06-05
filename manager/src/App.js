import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    // The 2nd argument optional and meant to pass an initial state we
    // might want to pass to our redux application.
    // The 3rd argument is called store enhancers, and adds additional
    // functionality to the store.
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
