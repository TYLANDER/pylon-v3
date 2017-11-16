import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import InterspanHero from '../components/interspan-hero'
import LeftTitle from '../components/left-title-top-border-interspan'
import Footer3 from '../components/footer3'



class WorkPage extends Component {
  render() {
    return (
    <div className="sans-serif">
      <Nav2 />
      <InterspanHero />
      <LeftTitle />
      <Footer3 />
    </div>
    );
  }
}

export default WorkPage;
