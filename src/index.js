import React from 'react'
import ReactDOM from 'react-dom'
import 'css/index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import {
  Router,
  Route,
  BrowserRouter
} from 'react-router-dom'
import WorkPage from './containers/AboutPage'
import AboutPage from './containers/WorkPage'


//This is the build entry. (or getElementById('root')
ReactDOM.render((
  <Router history={BrowserRouter}>
    <Route path="/" component={App}>
      {/* add the routes here */}
      <Route path="/about" component={AboutPage}/>
      <Route path="/work" component={WorkPage}/>
    </Route>
  </Router>
), document.getElementById('app'))

registerServiceWorker();
