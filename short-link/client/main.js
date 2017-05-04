import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';

//exports
import {routes, onAuthenticationChange} from '../imports/routes/routes'
import '../imports/startup/simple-schema-config.js';
import {Links} from '../imports/api/links';


Tracker.autorun(() =>{

  const isAuthenticated = Meteor.userId();
  onAuthenticationChange(isAuthenticated);
});

//Stateless functional components
// just a function. Does not support component state.

const MyComponent = () =>{
  //this will act just like the render() in state..ful? (check teminology on that) components
  return(
    <div>
      <h1>Sexy Stateless Component</h1>
    </div>
  )
}

Meteor.startup(() =>{

  ReactDOM.render(routes, document.getElementById('app'));
})
