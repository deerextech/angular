import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';

//exports
import {routes, onAuthenticationChange} from '../imports/routes/routes'

import {Links} from '../imports/api/links';


Tracker.autorun(() =>{

  const isAuthenticated = Meteor.userId();
  onAuthenticationChange(isAuthenticated);
});


Meteor.startup(() =>{


  ReactDOM.render(routes, document.getElementById('app'));
})
