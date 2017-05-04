import React from 'react';

export default class PrivateHeader extends React.Component{
  constructor(props){
    super(props)
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout(){
    Accounts.logout();
  }

  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      <button onClick={this.onLogout}>Logout</button>
      <p>Add Link </p>
    </div>
    )
  }
}
