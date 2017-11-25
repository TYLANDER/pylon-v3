import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav2 from '../components/nav2'
import HomeArticle from '../components/title-left'
import BladeRight from '../components/blade-interspan'
import BladeLeft from '../components/blade-musclebutter'
import Footer3 from '../components/footer3'


class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav2 />
      <StartupHero />
      <HomeArticle />
      <BladeRight />
      <BladeLeft />
      <Footer3 />
    </div>
    );
  }
}

export default HomePage;
