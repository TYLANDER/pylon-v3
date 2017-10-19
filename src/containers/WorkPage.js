import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-right'
import BladeLeft from '../components/blade-left'
import SpacerSmall from '../components/space-small'


class WorkPage extends Component {
  render() {
    return (
    <div className="mw9 center sans-serif">
      <Nav2 />
        <header className="tl ph3 ph4-ns mv4 mv6-ns">
          <div className="pa2 w-100"></div>
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h4 className="f4 lh-copy fw4 measure black-50 mt0 mv3 near-black measure-wide">
          Pylon is dedicated to crafting the best possible experience for end users.<br /> We identify and solve impactful problems through Human Centered Design methodologies. Empathy is the best medicine for a complex system. We apply solutions through a globally distributed team of smart creatives.
          </h4>
      </header>
        <div className="pa5 w-100"></div>
      <BladeRight />
      <SpacerSmall />
      <BladeLeft />
      <SpacerSmall />
    </div>
    );
  }
}

export default WorkPage;
