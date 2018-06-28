import React, { Component } from 'react';
import './App.css';
import * as sellerMobileLogo from './sellermobile-logo.png';

class App extends Component {
  render() {
    return ( 
      <div
        className='app-container'
      >
        <img 
          alt='sellermobile-logo'
          className='app-logo'
          src={sellerMobileLogo}
        />
        <div
          className='signin-container'
        >
          <h1
            className='signin'
          >
            Sign In
          </h1>

          <div
            className='signin-field'
          >
            <label>Email (phone for mobile accounts)</label>
            <input 
              className='input-field'
              maxlength="128" 
              tabindex="1" 
              type="email" 
            />
          </div>

          <div
            className='signin-field m-b-22'
          >
            <div
              className='flex-row-space-between'
            >
              <label>Password</label>
              <a
                href=''
              >
                Forgot your password?
              </a>
            </div>
            <input 
              className='input-field'
              tabindex="2" 
              type='password'
            />
          </div>

          <div 
            className='btn btn-primary m-b-26'
          >
            Sign in
          </div>

          <div 
            className='btn m-b-26'
          >
            Register now
          </div>
        </div>
      </div>
    );
  }
}

export default App;