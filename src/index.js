import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/app.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'



//This is the build entry. (or getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
