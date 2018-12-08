import React from 'react'
import 'whatwg-fetch'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Component Imports //
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Grid from './components/HomeGrid.js'
import Modal from './components/Modal.js'
import Leaf from './components/Leaf.js'


function App() {
  const realProp = "leafar"
  const pro      = "lumar"

  return (
    <Router>
      
      <div className="wholePage">
        <Header />
        <Route path="/:id" component={Leaf} />
        {/* <Leaf value = {pro} /> */}
        <Route exact path="/" component={Grid} />
        <Footer />
      </div>
    </Router>
  );
}


render(
  <App />,
  document.getElementById('root')
)