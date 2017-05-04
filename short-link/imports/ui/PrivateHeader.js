import React from 'react';
import {Accounts} from 'meteor/accounts-base';
import PropTypes from 'prop-types';

//   onLogout(){
//     Accounts.logout();
//   }

const StatelessPrivateHeader = (props) =>{
  return(
    <div>
    <h1>{props.title}</h1>
    <button onClick={()=> Accounts.logout()}>Logout</button>
    <p>Add Link </p>
  </div>
  )
}
export default StatelessPrivateHeader;


StatelessPrivateHeader.propTypes ={
  title: PropTypes.string.isRequired
}
