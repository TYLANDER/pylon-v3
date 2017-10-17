import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav from '../components/nav'


class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav />
      <StartupHero />
    </div>
    );
  }
}

export default HomePage;
