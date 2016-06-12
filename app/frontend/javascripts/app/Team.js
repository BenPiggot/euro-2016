import React, { Component } from 'react';
import TeamInfo from './TeamInfo.js';

class Team extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      showInfo: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ showInfo: !this.state.showInfo })
    $('body').on('click', () => {
      this.setState({ showInfo: !this.state.showInfo })
    })
  }

  render() {
    const props = {
      name: this.props.teamName
    }
    return <tr>
      <td><img style={{height: '20px', width: '30px'}} src={this.props.image}/></td>
      <td onClick={this.handleClick}>
        {this.props.teamName}
        {this.state.showInfo ? <TeamInfo {...props} /> : null }
      </td>
      <td>{this.props.played}</td>
      <td>{this.props.goals}</td>
      <td>{this.props.goalsAgainst}</td>
      <td>{this.props.points}</td>
    </tr>
  }
}

export default Team;