import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-right'
import BladeLeft from '../components/blade-left'
import SpacerSmall from '../components/space-small'
import Footer from '../components/footer'
import BladeCenter from '../components/blade-center'
import WorkHero from '../components/workhero'


class WorkPage extends Component {
  render() {
    return (
    <div className="mw-100 mw9-ns center sans-serif bg-near-white">
      <Nav2 />
      <WorkHero />
      <BladeRight />
      <SpacerSmall />
      <SpacerSmall />
      <SpacerSmall />
      <BladeLeft />
      <SpacerSmall />
      <BladeCenter />
      <Footer />
    </div>
    );
  }
}

export default WorkPage;
