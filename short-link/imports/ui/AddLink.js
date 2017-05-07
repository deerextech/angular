import React from 'react';
import {Meteor} from 'meteor/meteor';
import Modal from 'react-modal';


export default class AddLink extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url:'',
      isOpen:false,
      error:''
    }
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  onSubmit(e){
    const {url} = this.state;
    e.preventDefault();

    Meteor.call('links.insert', url,(err,res)=>{
        if(!err){
          this.handleModalClose();
        }else{
          this.setState({error:err.reason});
        }
    });
  }
  onChange(e){
    this.setState({
      url: e.target.value
    })
  }
  handleModalClose(){
    this.setState({
      isOpen:false,
      error: '',
      url:''
    })
  }
  render(){
    return(
      <div>
        <button onClick={()=>{this.setState({isOpen:true})}}>+ AddLink</button>
        <Modal
          isOpen={this.state.isOpen}
          contentLabel="Add Link"
          onAfterOpen={()=> this.refs.url.focus()}
          onRequestClose={this.handleModalClose}
          >

          <h1>Add Link</h1>
          <p>{this.state.error ? <p>{this.state.error}</p> : undefined} </p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input
              type="text"
              placeholder="URL here"
              value={this.state.url}
              ref="url"
              onChange={this.onChange.bind(this)}
            />
            <button>{this.props.AddLinkBtn}</button>
          </form>
          <button onClick={this.handleModalClose}>Cancel</button>
        </Modal>
      </div>
    )
  }
}
