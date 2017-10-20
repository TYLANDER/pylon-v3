import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-right'
import BladeLeft from '../components/blade-left'
import SpacerSmall from '../components/space-small'
import Footer from '../components/footer'


class WorkPage extends Component {
  render() {
    return (
    <div className="mw9 center sans-serif">
      <Nav2 />
        <header className="tl ph ph6-ns mv4 mv6-ns">
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h4 className="f4 lh-copy fw4 measure-wide mt0 mv3 near-black">
          Pylon is dedicated to crafting the best possible experience for end users.<br /> We identify and solve impactful problems with Human Centered Design methodologies. We apply solutions through a globally distributed team of smart creatives.
          </h4>
      </header>
      <BladeRight />
      <SpacerSmall />
      <BladeLeft />
      <Footer />
    </div>
    );
  }
}

export default WorkPage;
