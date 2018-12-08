import React from 'react'
import 'whatwg-fetch'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Card extends React.Component {
    constructor(props) {
      super(props);
  
      // Handle Data
      this.state = {
        record: props.value,
        id: props.value.id,
        name: props.value['fields'].Name,
        creatorName: props.value['fields'].CreatorNames,
        companyName: props.value['fields'].CompanyName
      }
  
      if (props.value['fields'].Picture) {
        this.state.thumbnailUrl = props.value['fields'].Picture[0].thumbnails.large.url;
      }
    }
  
    // Unused
    selectItem() {
      this.state.cardOpen = true
  
    }
  
    render() {
  
      // Title of Authoring Environment
      var environmentTitle = <h2> {this.state.name} </h2>
  
      // Thumbnail of Authoring Environment
      if (this.state.thumbnailUrl) {
        var photoThumbnail = <img className="gridThumbnail" src={this.state.thumbnailUrl} />
      }
  
      // Creators/Authors
      if (this.state.creatorName) {
        var creatorNames = <p>{this.state.creatorName.join(', ')}</p>
      }
  
      // Name 
      if (this.state.companyName) {
        var companyNames = <p>{this.state.companyName.join(', ')}</p>
      }
      const specificLink = "/" + this.state.id;

      return (
        <div
          className="homeCard"
        // Something Here about Routing     
        // onClick={() => this.props.onClick()}
        >
          <Link className="cardLinkC" to={specificLink}>
          {photoThumbnail}
          {environmentTitle}
  
          {creatorNames}
          {companyNames}
  
          </Link>
        </div>
  
      )
    }
  }