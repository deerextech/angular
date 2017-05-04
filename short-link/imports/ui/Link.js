import React from 'react';
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
