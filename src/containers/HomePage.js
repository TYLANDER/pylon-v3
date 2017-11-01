import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav2 from '../components/nav2'
import HomeArticle from '../components/title-left'
import Footer2 from '../components/footerv2'


class HomePage extends Component {
  render() {
    return (
    <div className="debug-grid-16">
      <Nav2 />
      <StartupHero />
      <HomeArticle />
      <Footer2 />
    </div>
    );
  }
}

export default HomePage;
