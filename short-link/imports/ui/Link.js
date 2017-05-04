import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import { Links } from '../api/links';
import LinksList from './LinksList';
export default class Lynk extends React.Component{
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onLogout(){
    Accounts.logout();
  }
  onSubmit(e){
    // console.log('url', this.refs.value);
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if(url){
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }

  }

  render(){
    return (
      <div>
        <h1>Your shrtLynk </h1>
        <button onClick={this.onLogout}>Logout</button>
        <p>Add Link </p>
        <LinksList />
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL here" />
          <button>Add link </button>
        </form>
      </div>
    )
  }
}
