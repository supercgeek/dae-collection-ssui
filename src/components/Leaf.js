import React from 'react'
import 'whatwg-fetch'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//export default ({match: {params: {id}}}) => <h1>hi  test</h1>

export default class Leaf extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            record: [],
            id: props.match.params.id
        }
    }

    async componentDidMount() {
        const recordRequest = '/api2/' + this.state.id
        let resp = await fetch(recordRequest, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        let json = await resp.json()
        const { fields } = json; 
        
        this.setState((prevState) => {
            console.log(fields['Name'])
            return {
                id: prevState.id,
                record: fields,
                Name: fields['Name'],
                creatorName: fields['CreatorNames'],
                companyName: fields['CompanyName'],
                pictureArray: fields['Picture'],
                firstYear: fields['FirstYear'],
                lastYear: fields['LastYear'],
                thumbnailUrl: null
            }
        })

        if (this.state.pictureArray) {
            console.log("pic arraay")
            this.state.thumbnailUrl = this.state.pictureArray[0].thumbnails.large.url;
          }

    }

    render() {
        // Title of Authoring Environment
        var environmentTitle = <h1>{this.state.Name}</h1>
  
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
        const title  =  <h1>{this.state.Name}</h1>
        const detail =  <p>{this.state.id}</p>; //<p> //record.state.title}</p>


        return (
            <div>
                {photoThumbnail}
                {environmentTitle}
                
                {creatorNames}
                {companyNames}
                {photoThumbnail}
            </div>
        );
    }
}

