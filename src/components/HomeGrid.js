import React from 'react'
import 'whatwg-fetch'
import Modal from './Modal';

export default class Grid extends React.Component {
    state = {
      records: [],
      currId: null
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

    // renderModal() {
    //   if (this.state.currId !== null) {
    //     return (
    //       <Modal />
    //     )  {/* {this.renderModal()} */}
    //   }
    // }

    // selectItem() {
    //   currId: null
    // }
  
    render() {
      let { records } = this.state
      // var cards = []
      // for (let i = 0; i < records.length; i++) { // http://marybethkery.com/SSUI-SimpleReactApp/
      //   let record = records[i]
      //   cards.push(<Card onClick = {this.selectItem.bind(this, i)} key = {i} value={record} />)
      // }
      
      return (
        <div>
      
          <main className="Grid">
            {/* {cards}     */}
            {records && records.length > 0 ? records.map((record, index) =>
             <Card key = {index} value={record} /> ) : <p>Double-check that you have added your API key to .env.</p>}
          </main>
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    constructor(props) {
      super(props);
      
      // Handle Data
      this.state = {
        record :     props.value,
        id:          props.value.id,
        name:        props.value['fields'].Name,
        creatorName: props.value['fields'].CreatorNames,
        companyName: props.value['fields'].CompanyName,
        cardOpen:    false
      }

      if (props.value['fields'].Picture) {
        this.state.thumbnailUrl = props.value['fields'].Picture[0].thumbnails.large.url;
      }

      // Handle Events
      // this.handleClick = this.handleClick.bind(this);
    }


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

      return (
        <div className="homeCard" onClick = {this.selectItem.bind(this, this.state.id)}>
        {photoThumbnail}
        {environmentTitle}
        
        {creatorNames}
        {companyNames}
        
        </div>
        
      )
    }
  }

  