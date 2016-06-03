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
  }, [])

  return <div className='container'>
    <h1>Euro 2016</h1>

    <h3>Group A</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'A') {
          return <Team teamName={team.team} />
        }
      }) : null
    }

    <h3>Group B</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'B') {
          return <Team teamName={team.team} />
        }
      }) : null
    }

    <h3>Group C</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'C') {
          return <Team teamName={team.team} />
        }
      }) : null
    }

    <h3>Group D</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'D') {
          return <Team teamName={team.team} />
        }
      }) : null
    }

    <h3>Group E</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'E') {
          return <Team teamName={team.team} />
        }
      }) : null
    }

    <h3>Group F</h3>
    { teams.length > 0 ?
      teams.map( (team) => {
        if (team.group === 'F') {
          return <Team teamName={team.team} />
        }
      }) : null
    }
    </div>
  }
};

export default Tables;

