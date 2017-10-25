import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav2 from '../components/nav2'
import HomeArticle from '../components/article-center-wide'
import Footer2 from '../components/footerv2'


class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav2 />
      <StartupHero />
      <HomeArticle />
      <Footer2 />
    </div>
    );
  }
}

export default HomePage;
