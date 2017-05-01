import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Router} from 'react-router';

class SignupPage extends React.Component{
  render(){
    return <p>Sign up component shall go here</p>
  }
}

Meteor.startup(() =>{
  ReactDOM.render(<SignupPage />, document.getElementById('app'));
})
