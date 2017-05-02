import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';

//components
import SignUpPage from './../imports/ui/SignUpPage';
import Lynk from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

// window.browserHistory = browserHistory;
const unauthenticedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () =>{
  if(Meteor.userId()){
    browserHistory.push('/links');
  }
};
const onEnterAuthPage = () =>{
  if(!Meteor.userId()){
    browserHistory.push('/')
  }
}
const routes =
(
  <Router history={browserHistory}>
    <Route exact path={'/'} component={Login}  onEnter={onEnterPublicPage}/>
    <Route path={'/login'} component={Login} onEnter={onEnterPublicPage} />
    <Route path={'/links'} component={Lynk} onEnter={onEnterAuthPage} />
    <Route path={'/signup'} component={SignUpPage} onEnter={onEnterPublicPage} />
    <Route path="*" component={NotFound} />
    {/* * is a catch all, incase user tries to go to a url that doesn't exist  */}

  </Router>
);


Tracker.autorun(() =>{

  const isAuthenticated = Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnathenticatedPage = unauthenticedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnathenticatedPage && isAuthenticated){
    browserHistory.push('/links')
  }
  else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.push('/')
  }
});

Meteor.startup(() =>{
  ReactDOM.render(routes, document.getElementById('app'));
})
