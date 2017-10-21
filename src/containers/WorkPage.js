import React, { Component } from 'react';
import Nav2 from '../components/nav2'
import BladeRight from '../components/blade-right'
import BladeLeft from '../components/blade-left'
import SpacerSmall from '../components/space-small'
import Footer from '../components/footer'
import BladeCenter from '../components/blade-center'
import Bots from '../images/bots_raster.jpg'
import WorkHero from '../components/workhero'


class WorkPage extends Component {
  render() {
    return (
    <div className="mw-100 mw9-ns center sans-serif bg-white">
      <Nav2 />
        <header className="tl ph3 pl4-ns mv4 mt4-ns mb1-ns">
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Making Order from Chaos
        </h1>
        <h4 className="f4 lh-copy fw4 measure-wide mt0 mv3 near-black">
          Pylon is dedicated to crafting the best possible experience for end users.<br /> We identify and solve impactful problems with Human Centered Design methodologies. We apply solutions through a globally distributed team of smart creatives.
          </h4>
      </header>
      <div className="mb4d mb6-ns">
        <img src={require('../images/bots_raster.jpg')}  class="w-100 w-90-ns s ph4-ns centered " alt="Pylon Logo"></img>
      </div>
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
