import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import { Links } from '../api/links';
import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';

export default class Lynk extends React.Component{


  render(){
    return (
      <div>
        <PrivateHeader title="Your Links!" />
        <LinksList />
        <AddLink AddLinkBtn="Add Link!"/>
      </div>
    )
  }
}
