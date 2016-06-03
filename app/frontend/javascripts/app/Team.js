import React, { Component } from 'react';

class Team extends Component {

  render() {
    return <div>
      {this.props.teamName}
    </div>
  }
}

export default Team