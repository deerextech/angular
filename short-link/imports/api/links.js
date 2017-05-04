import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer){
  Meteor.publish('linksPublication', function() {

    console.log('this userid', this.userId);
    var user = this.userId;
    //UserLinks = this.userId

    //exposing links so they can be subscribed to
    return Links.find({'userId':user});
  })
}

//methods

Meteor.methods({
//resource.action
//links.insert

  'links.insert'(url){
    //user must be logged in
    if(!this.userId){
      throw new Meteor.Error('not-authorized');
    }
    Links.insert({
      url,
      userId: this.userId
    })
  }

});
