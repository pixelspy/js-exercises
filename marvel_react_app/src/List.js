import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <ListItem comicData={this.props.results[0]}/>
    );
  }
}

export default List;
