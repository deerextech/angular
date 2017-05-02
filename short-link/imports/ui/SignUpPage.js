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
      <div>
        <h1>Join shrtLynk </h1>

        {this.state.error ? <p> {this.state.error} </p> : undefined }

        <form onSubmit={this.onSubmit}>
          <input type="email" ref="email" name="email" placeholder="Email" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Create Account</button>

        </form>


        <Link to="/"> Have an account already? </Link>
      </div>
    )
  }
}
