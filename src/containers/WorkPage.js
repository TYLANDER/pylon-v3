import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-right'
import BladeLeft from '../components/blade-left'
import Footer3 from '../components/footer3'
import BladeCenter from '../components/blade-center'
import WorkHero from '../components/workhero'


class WorkPage extends Component {
  render() {
    return (
    <div className="mw-100 sans-serif">
      <Nav2 />
      <WorkHero />
      <BladeRight />
      <BladeLeft />
      <BladeCenter />
      <Footer3 />
    </div>
    );
  }
}

export default WorkPage;
