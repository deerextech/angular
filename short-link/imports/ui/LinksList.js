import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';
import {Session} from 'meteor/session';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';


export default class LinksList extends React.Component{

constructor(props){
  super(props)
  this.state = {
    links:[]
  }
}
  componentDidMount(){
  this.linksTracker = Tracker.autorun(() =>{
    Meteor.subscribe('linksPublication');//this must match string specified in server pub
    const links =  Links.find({visible:Session.get('showVisible')}).fetch();
    this.setState({links})
  })
}

  renderLinksListItems(){
    let links = this.state.links;
    return links.map((link)=>{
      // return <li key={link._id}>{link.url}</li>
      //using spread operator to get props of link.
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />
    })
  }
  componentWillUnmount(){
    this.linksTracker.stop();
  }
  render(){
    return(
      <div>
        <p>Links List</p>
        <ul>{this.renderLinksListItems()}</ul>
      </div>
    )
  }
}
