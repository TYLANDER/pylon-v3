import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-interspan'
import BladeLeft from '../components/blade-left'
import Footer3 from '../components/footer3'
import WorkHero from '../components/workhero'
import WorkTitle from '../components/title-work'


class WorkPage extends Component {
  render() {
    return (
    <div className="sans-serif">
      <Nav2 />
      <WorkHero />
      <WorkTitle />
      <BladeRight />
      <BladeLeft />
      <Footer3 />
    </div>
    );
  }
}

export default WorkPage;
