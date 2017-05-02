import React from 'react';
import { Link } from 'react-router';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      error: ''
    }
  }
  onSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email},password, (err)=>{
      console.log('login callback', err);
    })

  }
  render(){
    return (
      <div>
        <h1>Login to shrtLynk </h1>
        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Sign in</button>

        </form>
        <Link to="/signup"> Don't have an account yet? </Link>
        <br />
        <Link to="/links"> Shortcut for Dev. Don't forget to delete this </Link>
      </div>
    )
  }
}
