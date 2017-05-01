import React from 'react';
import {Players} from './../api/players';
import Player from './Player';
import FlipMove from 'react-flip-move';



export default class PlayerList extends React.Component {
  renderPlayers(){
    if(this.props.players.length === 0){

      return(
        <div className="item"><p className="item__message ">Add first player to get started</p></div>
      )

    }
    else{
      return this.props.players.map((player)=>{
        return <Player key={player._id}  player={player}/>
      })
    }

  }

  render(){
    return(
    <div>
      <FlipMove duration={750} maintainContainerHeight={true} easing="ease-out">
        {this.renderPlayers()}
         </FlipMove>
    </div>
    )
  }
}
