import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from './../imports/ui/SignUpPage';
import Link from './../imports/ui/Link';

import {Router, Route, browserHistory} from 'react-router';
//using browser history because the urls are cleaner then hashhistory /#/page

const routes =
(
  <Router history={browserHistory}>
    <Route exact path={'/links'} component={Link} />
    <Route path={'/signup'} component={SignUpPage} />
  </Router>
);





Meteor.startup(() =>{
  ReactDOM.render(routes, document.getElementById('app'));
})
