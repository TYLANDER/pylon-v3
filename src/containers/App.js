import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './Main'
import Header from '../components/header'
import WorkPage from '../containers/WorkPage'
import AboutPage from '../containers/AboutPage'


// src/containers/App.js
// Where I want to house all components for now.
const App = () => (
  <Router>
       <div>
        <Header />
        <Main />
          <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>

        <hr/>

          <Route exact path="/" component={Main} />
          <Route path="about" component={AboutPage}/>
          <Route path="work" component={WorkPage}/>
       </div>
     </Router>
     )


export default App
