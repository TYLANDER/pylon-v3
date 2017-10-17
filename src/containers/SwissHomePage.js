import React, { Component } from 'react'
import SwissCover from '../components/swiss-cover'
import Nav from '../components/nav'
import Footer2 from '../components/footerv2'

class HomePage extends Component {
  render() {
    return (
    <div>
      <Nav />
      <SwissCover />
      <Footer2 />
    </div>
    );
  }
}

export default HomePage;
