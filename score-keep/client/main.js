import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, CalculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';


Meteor.startup(()=>{

  Tracker.autorun(()=>{

    let players = Players.find({},{
      sort:{score:-1}
    }).fetch();

    let title = 'Unicorn Scores ...';
    let positionedPlayers = CalculatePlayerPositions(players);
  ReactDOM.render(
    <App title={title} players={positionedPlayers}/>,
    document.getElementById("app"))
  });

})
