import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDcwygOiPWAACX4L3X9pwjQ3AIt33KL2M4',
      authDomain: 'react-native-auth-4b050.firebaseapp.com',
      databaseURL: 'https://react-native-auth-4b050.firebaseio.com',
      storageBucket: 'react-native-auth-4b050.appspot.com',
      messagingSenderId: '1068361324749'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
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

export default App;
