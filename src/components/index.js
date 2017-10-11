import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route} from 'react-router';
import 'css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


//This is the build entry.
ReactDOM.render((
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="about" component={AboutPage}/>
        <Route path="work" component={WorkPage}/>
      </div>
    </Router>),
  document.getElementById('root')
  );

registerServiceWorker();
