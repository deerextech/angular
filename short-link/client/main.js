import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
//using browser history because the urls are cleaner then hashhistory /#/page

//components
import SignUpPage from './../imports/ui/SignUpPage';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const routes =
(
  <Router history={browserHistory}>
    <Route exact path={'/'} component={Login} />

    <Route exact path={'/links'} component={Link} />
    <Route path={'/signup'} component={SignUpPage} />
    <Route path="*" component={NotFound} />
    {/* * is a catch all, incase user tries to go to a url that doesn't exist  */}

  </Router>
);





Meteor.startup(() =>{
  ReactDOM.render(routes, document.getElementById('app'));
})
