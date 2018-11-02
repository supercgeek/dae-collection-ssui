import React from 'react'
import 'whatwg-fetch'


export default class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        record: [],
        currId: props.currId
      }
    }
    
    // This forces a refresh every-time a new props is passed (i.e. every click)
    componentWillReceiveProps(newProps) {
      if (newProps.currId != null) {
        console.log(newProps.currId)
      
        var recordJson = this.updateModal(newProps.currId)

        if (newProps.currId != null) {
          this.setState({
            record:      recordJson,
            currId:      newProps.currId
          })
        }
      }
    }

    async updateModal(uId) {
      var searchRoute = /api2/ + uId

      console.log(searchRoute)
      let resp = await fetch(searchRoute, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        }
    })

    let json = await resp.json()
    const { record } = json
    return json;
  }
    
    componentDidMount() {
      this.render()
    }

    modalBuild() {
      console.log(this.state.record)
      if (this.state.records != null) {
        return (
          <h3>...</h3>
        )
      } 
    }

    render() {
      return(
        <div className="Modal">
          {this.modalBuild()}
        </div>
      )
    }
  }