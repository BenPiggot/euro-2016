import React, { Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';
import 'babel-polyfill';
import Team from './Team.js';

class Tables extends Component {
  render() {
    const groupInfo = _.values(this.props.tables[0]);

    const teams = groupInfo.reduce( (memo, group) => {
     return memo.concat(group)
    }, []);

    const groupA = teams.length > 0 ? teams.map( (team) => {
          if (team.group === 'A') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    const groupB = teams.length > 0 ?
        teams.map( (team) => {
          if (team.group === 'B') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    const groupC = teams.length > 0 ?
        teams.map( (team) => {
          if (team.group === 'C') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    
    const groupD = teams.length > 0 ?
        teams.map( (team) => {
          if (team.group === 'D') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    const groupE = teams.length > 0 ?
        teams.map( (team) => {
          if (team.group === 'E') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    const groupF = teams.length > 0 ?
        teams.map( (team) => {
          if (team.group === 'F') {
            return <Team teamName={team.team} 
               played={team.playedGames}
               goals={team.goals} 
               goalsAgainst={team.goalsAgainst}
               points={team.points}
               image={team.crestURI}
               position={team.rank} 
               id={team.teamId}
               key={team.teamId}/>
          }
        }) : null;

    return <div className='container'>
      <div style={{backgroundColor: '#3986B3'}}>
        <h1 style={{color: 'white', textAlign: 'center', fontSize: '5rem', fontWeight: 200, marginBottom: '2rem'}}>
          Euro 2016
        </h1>
      </div>

      <h3>Group A</h3>
      <table className='table'>
       <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupA }
        </tbody>
      </table>

      <h3>Group B</h3>
      <table className='table'>
       <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupB }
        </tbody>
      </table>

      <h3>Group C</h3>
      <table className='table'>
       <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupC }
        </tbody>
      </table>

      <h3>Group D</h3>
      <table className='table'>
        <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupD }
        </tbody>
      </table>

      <h3>Group E</h3>
      <table className='table'>
        <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupE }
        </tbody>
      </table>

      <h3>Group F</h3>
      <table className='table'>
        <thead className='thead-default'>
          <tr>
            <th></th>
            <th>Country</th>
            <th>Games Played</th>
            <th>Goals For</th>
            <th>Goals Against</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        { groupF }
        </tbody>
      </table>
    </div>
  }
};

export default Tables;

