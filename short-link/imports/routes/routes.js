import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
//using browser history because the urls are cleaner then hashhistory /#/page
import {Tracker} from 'meteor/tracker';

//components
import SignUpPage from '../ui/SignUpPage';
import Lynk from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

// window.browserHistory = browserHistory;
const unauthenticedPages = ['/','/signup'];
const authenticatedPages = ['/links'];

const onEnterPublicPage = () =>{
  if(Meteor.userId()){
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () =>{
  if(!Meteor.userId()){
    browserHistory.replace('/')
  }
}

const on AuthenticationChange = (isAuthenticated) =>{
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnathenticatedPage = unauthenticedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if(isUnathenticatedPage && isAuthenticated){
    browserHistory.replace('/links')
  }
  else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/')
  }
});
}
const routes =
(
  <Router history={browserHistory}>
    <Route exact path={'/'} component={Login}  onEnter={onEnterPublicPage}/>
    <Route path={'/login'} component={Login} onEnter={onEnterPublicPage} />
    <Route path={'/links'} component={Lynk} onEnter={onEnterPrivatePage} />
    <Route path={'/signup'} component={SignUpPage} onEnter={onEnterPublicPage} />
    <Route path="*" component={NotFound} />
    {/* * is a catch all, incase user tries to go to a url that doesn't exist  */}

  </Router>
);
