import React from 'react';
import {Players} from './../api/players';


export default class AddPlayer extends React.Component{
  handleSubmit(e){
    let playerName = e.target.playerName.value;
    // let playerScore = e.target.playerScore.value;

    e.preventDefault();

    if(playerName){
      e.target.playerName.value = "";
      // e.target.playerScore.value = "";

      Players.insert({
        name: playerName,
        score: 2
      })
    }
  }

  render(){
    return (
      <div className="item">
      <form className="form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" className="form__input" name="playerName" placeholder="Player Name" />
        <button className="button">Add Player</button>
      </form>
    </div>

    )
  }
}
