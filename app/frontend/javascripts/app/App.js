import React, { Component } from 'react';
import 'whatwg-fetch';
import 'babel-polyfill';

const HEADERS = {
  'X-Auth-Token': '663528934d21408f8a4a638a6511cdb5'
};


class App extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      fixtures: []
    }
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v1/soccerseasons/424/fixtures', { headers: HEADERS })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ fixtures: responseData})
      })
  }

  render() {
    console.log(this.state.fixtures)
    return <h1>Hello World</h1>
  }
}

React.render(<App/>, document.getElementById('root'))