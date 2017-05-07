import React from 'react';
import StatelessPrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

//Stateless
export default () => {
    return (
      <div>
        <StatelessPrivateHeader title="Your Links" />
        <LinksListFilters />
        <AddLink AddLinkBtn="Add Link!"/>
        <LinksList />
      </div>
    )
}
