import React, { Component } from 'react';
import _ from 'lodash';
import 'whatwg-fetch';
import 'babel-polyfill';
import Team from './Team.js';

class tables extends Component {
  render() {
  const groupInfo = _.values(this.props.tables[0]);

  const teams = groupInfo.reduce( (memo, group) => {
   return memo.concat(group)
  }, []);

  const groupA = teams.length > 0 ? teams.map( (team) => {
        if (team.group === 'A') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;

  const groupB = teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'B') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;

  const groupC =  teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'C') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;
  
  const groupD = teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'D') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;

  const groupE = teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'E') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;

  const groupF = teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'F') {
          return <Team teamName={team.team} 
             goals={team.goals} 
             goalsAgainst={team.goalsAgainst}
             points={team.points}
             image={team.crestURI}/>
        }
      }) : null;

  return <div className='container'>
    <h1>Euro 2016</h1>

     <h3>Group A</h3>
     <table className='table'>
     <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupA }
      </table>

     <h3>Group B</h3>
     <table className='table'>
     <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupB }
      </table>

     <h3>Group C</h3>
     <table className='table'>
     <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupC }
      </table>

      <h3>Group D</h3>
      <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupD }
      </table>

      <h3>Group E</h3>
      <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupE }
      </table>

      <h3>Group F</h3>
      <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Country</th>
          <th>Points</th>
          <th>Goals For</th>
          <th>Goals Against</th>
        </tr>
      </thead>
      { groupF }
      </table>

    </div>
  }
};

export default tables;

