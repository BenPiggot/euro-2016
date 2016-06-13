import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TeamInfo extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return <ReactCSSTransitionGroup>
      <div className='TeamInfo'>
        <h1 className='TeamInfo__TeamName'>{this.props.name}</h1>
      </div>
    </ReactCSSTransitionGroup>
  }
}

export default TeamInfo;