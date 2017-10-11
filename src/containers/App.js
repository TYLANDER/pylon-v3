import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'






// src/containers/App.js
// Where I want to house my containers
const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))


export default App;
