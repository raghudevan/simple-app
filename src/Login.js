import React, { Component } from 'react';

import './login.css';
import * as sellerMobileLogo from './sellermobile-logo.png';

class Login extends Component {
  render() {
    const { errors, isLoading, password, username } = this.props;
    
    return (
      <div
        className='login-container'
      >
        <img 
          alt='sellermobile-logo'
          className='app-logo'
          src={sellerMobileLogo}
        />
        {
          errors.length > 0 &&
            <div
              className='error-box'
            >
              <i className='icon fas fa-exclamation-triangle' />
              <div
                className='error-content'
              >
                <h1>There was a problem</h1>
                <ul>
                  {
                    errors.map((error, index) => 
                      <li key={index}>{ error }</li>
                    )
                  }
                </ul>
              </div>
            </div>
        }
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
              maxLength="128" 
              onChange={(evt) => this.props.onInputChange('username', evt.target.value)}
              tabIndex="1" 
              type="email" 
              value={username}
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
                href='https://app.sellermobile.com/password/reset'
              >
                Forgot your password?
              </a>
            </div>
            <input 
              className='input-field'
              onChange={(evt) => this.props.onInputChange('password', evt.target.value)}
              tabIndex="2" 
              type='password'
              value={password}
            />
          </div>

          <div 
            className={`btn btn-primary m-b-26 ${isLoading ? 'disabled' : ''}`}
            onClick={this.props.signIn}
          >
            Sign in
          </div>

          <div 
            className='btn m-b-26'
            onClick={this.props.moveToRegisterPage}
          >
            Register now
          </div>
        </div>
      </div>
    );
  }
}

export default Login;