import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';
//exports
import {routes, onAuthenticationChange} from '../imports/routes/routes'
import '../imports/startup/simple-schema-config.js';
import {Links} from '../imports/api/links';


Tracker.autorun(() =>{

  const isAuthenticated = Meteor.userId();
  onAuthenticationChange(isAuthenticated);
});


Meteor.startup(() =>{
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app'));
})
