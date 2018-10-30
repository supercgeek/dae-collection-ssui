import React from 'react'
import 'whatwg-fetch'

export default class Grid extends React.Component {
    state = {
      records: []
    }
  
    async componentDidMount() {
      let resp = await fetch('/api', {
        method: 'GET',
        headers: {
          'content-type': 'application/json'
        }
      })
      let json = await resp.json()
      const { records } = json
      this.setState({ records })
    }
  
    render() {
      let { records } = this.state
      return (
        <main className="Grid">
          
          {records && records.length > 0 ? records.map((record, index) =>
            <Card key = {index} value={record} /> /* <p>{{JSON.stringify(record)}</p> }*/
             
          ) : <p>Double-check that you have added your API key to .env.</p>}
  
        </main>
      )
    }
  }
  
  class Card extends React.Component {
    constructor(props) {
      super(props);
  
      console.log(props.value['fields'].Name, " -> ")
  
      this.state = {
        record :     props.value,
        name:        props.value['fields'].Name,
        creatorName: props.value['fields'].CreatorNames,
        companyName: props.value['fields'].CompanyName,
        //thumbnailUrl: props.value['fields'].Picture[0].thumbnails.large.url
      }
      
      if (props.value['fields'].Picture) {
        this.state.thumbnailUrl = props.value['fields'].Picture[0].thumbnails.large.url;
      }
      console.log(this.state.thumbnailUrl)
    }
  
    
  
    render() {
  
  
      if (this.state.creatorName) {
        var creatorNames = <p>{this.state.creatorName.join(', ')}</p>
      }
  
      if (this.state.companyName) {
        var companyNames = <p>{this.state.companyName.join(', ')}</p>
      }
      return (
        <div className="homeCard">
          <h2> {this.state.name} </h2>
  
          {creatorNames}
          {companyNames}
        </div>
      )
    }
  }
  