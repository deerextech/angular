import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class AddLink extends React.Component{
  /// hey, future me, do some reading about constuctor/super use cases
  // because I'm currently not sure if I should create that block, to bind the onSubmit function there
  // even though I do not need to pass any other properties to this component....
  //Generally it is better practice to bind methods in constructor, but again, not sure if this applies in this situation.

  onSubmit(e){
    // console.log('url', this.refs.value);
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if(url){
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }

  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="url" placeholder="URL here" />
          <button>{this.props.AddLinkBtn}</button>
        </form>
      </div>
    )
  }
}
