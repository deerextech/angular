import React from 'react';
import { Link } from 'react-router';

export default class SignUpPage extends React.Component{
  render(){
    return (
      <div>
        <h1>Join shrtLynk </h1>
        
        <Link to="/"> Have an account already? </Link>
      </div>
    )
  }
}
