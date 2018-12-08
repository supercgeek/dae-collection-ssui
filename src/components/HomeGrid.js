import React from 'react'
import 'whatwg-fetch'
import Card from  './Card.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    
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

  render() {
    let { records } = this.state

    return (
      <div>
        <main className="Grid">
          {records && records.length > 0 ? records.map((record, index) =>
            <Card
              key={index}
              value={record}
            />) : <p>Double-check that you have added your API key to .env.</p>}
        </main>
      </div>
    )
  }
}