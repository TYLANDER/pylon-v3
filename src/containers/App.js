import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/header'
import StartupHero from '../components/startuphero'
import Footer from '../components/footer'






// src/containers/App.js
// Entry point to my main container. Where I keep my routes...
const App = () => (
  <BrowserRouter>
    <div>
      <StartupHero />
      <Header />
      <Footer />
    </div>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'))


export default App;
