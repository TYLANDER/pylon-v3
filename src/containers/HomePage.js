import React, { Component } from 'react'
import StartupHero from '../components/startuphero'
import Nav from '../components/nav'
import HomeArticle from '../components/article-center-wide'
import Footer from '../components/footer'


class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav />
      <StartupHero />
      <HomeArticle />
      <Footer />
    </div>
    );
  }
}

export default HomePage;
