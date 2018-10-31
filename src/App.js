import React from 'react'
import 'whatwg-fetch'
import { render } from 'react-dom'

// Component Imports //
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Grid from   './components/HomeGrid.js'
import Modal from  './components/Modal.js'


function App() {
  return (
    <div className="wholePage">
      <Header />
      <Grid />
      <Footer />
    </div>
  );
}

  
render(
  <App />,
  document.getElementById('root')
)