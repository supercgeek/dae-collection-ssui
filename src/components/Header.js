import React from 'react'

export default class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <h1 className="title">Data</h1>
          <h1 className="title">Authoring</h1>
          <h1 className="title">Environments</h1>
        </div>
      )
    }
  }