import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    const metaData = this.props.comicData;
    const {thumbnail, issueNumber, pageCount, dates, prices} = metaData;
    return (
      <div className="comic">
        <div className="comic-thumbnail-container">
          <img className="comic-thumbnail" src={`${thumbnail.path}.${thumbnail.extension}`} alt="img"/>
        </div>
        <div className="comic-data-container">
          <h1>{metaData.title}</h1>
          <p>Issue: {issueNumber}</p>
          <p>Pages: {pageCount}</p>
          <p>Date: {new Date(dates[0].date).toLocaleDateString()}</p>
          <p>Price: ${prices[0].price}</p>
        </div>
      </div>
    );
  }
}

export default ListItem;
