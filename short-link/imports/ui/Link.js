import React from 'react';
import StatelessPrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';

//Stateless
export default () => {
    return (
      <div>
        <StatelessPrivateHeader title="Your Links" />
        <LinksList />
        <AddLink AddLinkBtn="Add Link!"/>
      </div>
    )
}
