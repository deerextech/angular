import React from 'react';
import { Link } from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class SignUpPage extends React.Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);


    this.state ={
      error: ''
    }
  }
  onSubmit(e){
    //prevent full page refresh
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if(password.length < 9){
      return this.setState({error: 'Password more than 8 characters long'})
    }
    //es6 Object Property Shorthand
    Accounts.createUser({email, password}, (err) =>{
      if(err){
        this.setState({
          error:err.reason
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
          <h1>Join shrtLynk </h1>

          {this.state.error ? <p> {this.state.error} </p> : undefined }

          <form onSubmit={this.onSubmit} noValidate className="lightbox-view__form">
            <input type="email" ref="email" name="email" placeholder="Email" />
            <input type="password" ref="password" name="password" placeholder="Password" />
            <button className="button">Create Account</button>

          </form>


          <Link to="/"> Have an account already? </Link>
        </div>
      </div>
    )
  }
}
