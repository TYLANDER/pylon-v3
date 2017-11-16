import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import MethodPage from './MethodPage'
import InterspanPage from './interspan-page'

//currently the "/" path loads Homepage first and then loads the other components from Main.js.
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
      <Route path="/work" component={WorkPage}/>
      <Route path="/method" component={MethodPage}/>
      <Route path="/interspan" component={InterspanPage}/>
    </div>
  </Router>
)

export default Routes
