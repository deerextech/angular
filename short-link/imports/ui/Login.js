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

      if(err){
        this.setState({
          error: 'Unable to log in; check email and password'
        });
      }
      else{
        this.setState({error: ''});
      }
    })
  }
  render(){
    return (
      <div className="lightbox-view">
        <div className="lightbox-view__box">
        <h1>shrtLynk </h1>
          {this.state.error ? <p> {this.state.error} </p> : undefined }
        <form onSubmit={this.onSubmit} noValidate className="lightbox-view__form">
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button className="button">Sign in</button>

        </form>
        <Link to="/signup"> Don't have an account yet? </Link>
      </div>
      </div>
    )
  }
}
