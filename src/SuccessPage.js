import React, { Component } from 'react';

import './success-page.css';

class SuccessPage extends Component {
  render() {
    return (
      <div
        className='success-message-container'
      >
        <h1>
          Seller Mobile Alexa
        </h1>

        <h4>
          Seller Mobile has been sucessfully linked!
        </h4>

        <p>
          What to do next:
          <ul>
            <li>
              Try saying "Alexa, open Seller Mobile"
            </li>
            <li>
              Close this window to return to the skill
            </li>
          </ul>
        </p>
      </div>
    )
  }
}

export default SuccessPage;