import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import 'whatwg-fetch';
import 'babel-polyfill';

class TeamInfo extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      countryImage: ''
    }
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4b1ce80af46485e18c007222f6f725b&tags=${this.props.name}&per_page=3&format=json&nojsoncallback=?`)
    .then((response) => response.json())
    .then((responseData) => {
      const photos = responseData.photos.photo.map( (p) => {
        return `https://farm3.static.flickr.com/${p.server}/${p.id}_${p.secret}_n.jpg`
      })

      const imageString = _.sample(photos)

     this.setState({ countryImage: imageString });
    })
  }

  render() {
    return <ReactCSSTransitionGroup>
      <div className='TeamInfo'>
        <h1 className='TeamInfo__TeamName'>{this.props.name}</h1>
        <img src={this.state.countryImage } />
      </div>
    </ReactCSSTransitionGroup>
  }
}

export default TeamInfo;