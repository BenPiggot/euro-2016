import React, { Component } from 'react';
import Tables from './Tables.js';
import 'whatwg-fetch';
import 'babel-polyfill';

const HEADERS = {
  'X-Auth-Token': '663528934d21408f8a4a638a6511cdb5'
};


class TablesContainer extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      tables: []
    }
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v1/soccerseasons/424/leagueTable', { headers: HEADERS })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ tables: [ responseData.standings ]})
      })
  }

  render() {
    console.log(this.state.tables)
    return <Tables tables={this.state.tables} />
  }
}

export default TablesContainer;