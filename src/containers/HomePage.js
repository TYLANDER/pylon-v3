import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav2 from '../components/nav2'
import HomeArticle from '../components/title-left'
import FeaturedWork from '../components/featured-work'
import BladeLeft from '../components/blade-musclebutter'
import Footer3 from '../components/footer3'


class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav2 />
      <StartupHero />
      <HomeArticle />
      <FeaturedWork />
      <BladeLeft />
      <Footer3 />
    </div>
    );
  }
}

export default HomePage;
