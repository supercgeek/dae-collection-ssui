import React from 'react'
import 'whatwg-fetch'
import { render } from 'react-dom'

function App() {
  return (
    <div>
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}


class Grid extends React.Component {
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
    this.state = {
      record : props.value
    }
    console.log(this.state.record)
  }

  render() {
    return (
      <div className="homeCard">
        {/* <p>{this.state.record.id}</p> */}
        <h2>{this.state.record['fields'].Name}</h2>
        <p>{this.state.record['fields'].CreatorNames}</p>
        <p>{this.state.record['fields'].CompanyName}</p>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Data Authoring Environments</h1>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>Carnegie Mellon University © 2018 </p>
      </div>
    )
  }
}



// Global Render Function 
// Call App on

//render(<Header />, document.getElementById('header'))
render(<App />,    document.getElementById('root')  )
//render(<Footer />,    document.getElementById('footer')  )