import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import 'css/index.css';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/nav';
import Header from './components/header';





//This is the build entry. (or getElementById('root'))
ReactDOM.render ((
    <Router>
      <Nav />
      <Header/>
    </Router>
  ),document.body)


registerServiceWorker();
