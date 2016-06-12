import React, { Component } from 'react';

class Team extends Component {

  render() {
    return <tr>
      <td><img style={{height: '20px', width: '30px'}}src={this.props.image}/></td>
      <td onClick={this.handleClick}>
        {this.props.teamName}
      </td>
      <td>{this.props.played}</td>
      <td>{this.props.goals}</td>
      <td>{this.props.goalsAgainst}</td>
      <td>{this.props.points}</td>
    </tr>
  }
}

export default Team;