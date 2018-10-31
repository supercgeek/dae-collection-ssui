import React from 'react'

export default class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <h1 className="title">Data</h1>
          <h1 className="title">Authoring</h1>
          <h1 className="title">Environments</h1>

          <p><a href="/">Home</a> &emsp; <a href="/models">Models</a> &emsp; <a href="#">Favourites</a> &emsp; SSUI — 05-431</p>
          <p>Ongoing project to build a web portal for the <a target="_blank" href="http://staging.dubberly.com/Data_Authoring_Environments"> Data Authoring Environments collection</a>. Original research supported by the <a target="_blank" href="http://dubberly.com">Dubberly Design Office</a> in June 2018.</p>
          </div>
      )
    }
  }