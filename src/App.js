import React, { Component } from 'react';
import 'whatwg-fetch';

import * as actions from './ajax';

import Login from './Login';
import SuccessPage from './SuccessPage';

import './App.css';

class App extends Component {

  state = {
    errors: [],
    isLoading: false,
    isLoggedIn: false,
    password: '', 
    username: '',
  }

  moveToRegisterPage = () => {
    window.location.href = 'https://app.sellermobile.com/register';
  }

  onInputChange = (field, value) => {
    this.setState({
      [field]: value.trim(),
    });
  }

  signIn = () => {
    const { isLoading, password, username } = this.state;
    let errors = [];
    let isLoggedIn = false;
    if (isLoading) {
      return;
    }

    if (!username) {
      // no username error
      errors.push('Enter your email or mobile phone number');
    } 
    if (!password) { 
      // no password error
      errors.push('Enter your password');
    } 

    this.setState({
      errors,
      isLoading: true,
    }, () => {
      if (!errors.length) {
        // if no error, do signin
        actions
          .signIn({ username, password })
          .then((data) => {
            // on success, move to the next page
            // on failure show error message
            const { status, message } = data;
            if (status === 'error') {
              errors.push(message);
            } else {
              isLoggedIn = true; 
            }
            
            this.setState({
              errors,
              isLoading: false,
              isLoggedIn,
            });
          });
      } 
    });

  }

  render() {
    const { 
      errors, isLoading, isLoggedIn,
      password, username 
    } = this.state;
   
    return ( 
      <div
        className='app-container'
      >
        {
          !isLoggedIn ?
            <Login 
              errors={errors}
              isLoading={isLoading}
              moveToRegisterPage={this.moveToRegisterPage}
              onInputChange={this.onInputChange}
              password={password}
              signIn={this.signIn}
              username={username}
            /> :
            <SuccessPage 
            />
        }
      </div>
    );
  }
}

export default App;