import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav2 from '../components/nav2'
import HomeArticle from '../components/title-left'
import Footer3 from '../components/footer3'


class HomePage extends Component {
  render() {
    return (
    <div className="bg-black">
      <Nav2 />
      <StartupHero />
      <HomeArticle />
      <Footer3 />
    </div>
    );
  }
}

export default HomePage;
