import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router';

export default class Lynk extends React.Component{
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    Accounts.logout();
  }

  render(){
    return (
      <div>
        <h1>Your shrtLynk </h1>
        <Link to="/">
        <button onClick={this.onLogout}>Logout</button>
        </Link>
      </div>
    )
  }
}
