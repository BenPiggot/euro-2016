import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import 'whatwg-fetch';
import 'babel-polyfill';

class TeamInfo extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return <ReactCSSTransitionGroup>
      <div className='TeamInfo'>
        <h1 className='TeamInfo__TeamName'>{this.props.name}</h1>
        <img className='CountryImage' src={this.props.countryImage } />
      </div>
    </ReactCSSTransitionGroup>
  }
}

export default TeamInfo;