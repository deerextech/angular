import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component{
  render(){
    return (
      <div>
        <h1>Login to shrtLynk </h1>
        login form shall be Here
        <Link to="/signup"> Don't have an account yet? </Link>
      </div>
    )
  }
}
