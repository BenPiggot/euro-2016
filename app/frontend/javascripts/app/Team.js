import React, { Component } from 'react';
import TeamInfo from './TeamInfo.js';

class Team extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      showInfo: false,
      countryImage: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f4b1ce80af46485e18c007222f6f725b&tags=${this.props.teamName}&has_geo=1&is_getty=true&per_page=3&format=json&nojsoncallback=?`)
    .then((response) => response.json())
    .then((responseData) => {
      const photos = responseData.photos.photo.map( (p) => {
        return `https://farm3.static.flickr.com/${p.server}/${p.id}_${p.secret}_n.jpg`
      })

      const imageString = _.sample(photos)
      this.setState({ countryImage: imageString });
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({ showInfo: !this.state.showInfo })
    $('body').on('click', (event) => {
      if (!$(event.target).closest('.TeamInfo').length > 0) {
        this.setState({ showInfo: !this.state.showInfo })
        $('body').unbind('click');
      }
    })
  }

  render() {
    const props = {
      name: this.props.teamName,
      countryImage: this.state.countryImage
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