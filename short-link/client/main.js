import {Meteor} from 'meteor/meteor';
// import React from 'react';
import ReactDOM from 'react-dom';
// import {Router, Route, browserHistory} from 'react-router';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';



Tracker.autorun(() =>{

  const isAuthenticated = Meteor.userId();

Meteor.startup(() =>{
  ReactDOM.render(routes, document.getElementById('app'));
})
