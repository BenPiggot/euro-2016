import React, { Component } from 'react';

class Team extends Component {

  render() {
    return <tr>
      <td><img style={{height: '20px', width: '30px'}}src={this.props.image}/></td>
      <td>{this.props.teamName}</td>
      <td>{this.props.points}</td>
      <td>{this.props.goals}</td>
      <td>{this.props.goalsAgainst}</td>
    </tr>
  }
}

export default Team