import React from 'react'
import 'whatwg-fetch'
import Modal from './Modal';

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    //this.modalRef = React.createRef(); //making a reference to child

    this.state = {
      records: [],
      cardOpen: true,
      currId: null,

    }
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

  cardClick(clickedCardIndex) {
    // console.log("just clicked: " + clickedCardIndex)
    this.setState({
      cardOpen: true,
      currId: clickedCardIndex
    })


  }

  renderModal() {
    // if (this.state.currId != null) {
    return (
      <div className="Modal">
        <Modal
          currId={this.state.currId}

        />
      </div>

    )

    // }
  }

  render() {
    let { records } = this.state

    return (
      <div>
        {this.renderModal()}
        <main className="Grid">
          {records && records.length > 0 ? records.map((record, index) =>
            <Card
              key={index}
              value={record}
            //onClick={} // <- here I need something about URL routing () => this.cardClick(record.id)
            />) : <p>Double-check that you have added your API key to .env.</p>}
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
      <div
        className="homeCard"
      // Something Here about Routing     

      /// onClick={() => this.props.onClick()}
      >
        {photoThumbnail}
        {environmentTitle}

        {creatorNames}
        {companyNames}

      </div>

    )
  }
}