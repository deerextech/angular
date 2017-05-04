import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Links} from '../api/links';
import {Meteor} from 'meteor/meteor';
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
    const links =  Links.find().fetch();
    this.setState({links})
  })
}

  renderLinksListItems(){
    let links = this.state.links;
    return links.map((link)=>{
      return <li key={link._id}>{link.url}</li>
    })
  }
  componentWillUnmount(){
    console.log('umpont');
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