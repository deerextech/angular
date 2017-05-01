import React from 'react';
import { browserHistory } from 'react-router';

export default class Lynk extends React.Component{

  render(){
    return (
      <div>
        <h1>Your shrtLynk </h1>
        <button onClick={() => {browserHistory.push('/')}}>Logout</button>
      </div>
    )
  }
}
