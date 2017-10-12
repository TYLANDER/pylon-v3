import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Main from './Main'






// src/containers/App.js
// Entry point to my main container and routes.
const App = () => (
  <BrowserRouter>
    <div>
      <Routes />
      <Main />
    </div>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))


export default App;
