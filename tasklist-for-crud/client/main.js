import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.unicorns.onCreated(function unicornsOnCreated() {
  // counter starts at 0
  this.counterUnicorns = new ReactiveVar(0);
  // this.counterPegasus = new ReactiveVar(0);
});
Template.pegasus.onCreated(function pegasusOnCreated(){
  this.counterPegasus= new ReactiveVar(0);
});

Template.unicorns.helpers({
  counterUnicorns() {
    return Template.instance().counterUnicorns.get();
  },
});

Template.pegasus.helpers({
  counterPegasus() {
    return Template.instance().counterPegasus.get();
  },
});

Template.unicorns.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counterUnicorns.set(instance.counterUnicorns.get() + 1);
  },
});


Template.pegasus.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counterPegasus.set(instance.counterPegasus.get() + 1);

  },
});
