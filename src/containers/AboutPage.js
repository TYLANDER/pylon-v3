import React from 'react';
import Nav2 from '../components/nav2'
import TitleText from '../components/title-text'
import DisplayBox from '../components/displaybox2col'
import Footer from '../components/footer'


export default () => (
  <div>
    <div className="mw9 center sans-serif debug-grid-16">
      <Nav2 />
        <header className="tl ph6-l mv6">
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h2 className="f2 f3-m 3-l fw3 black-50 mt0 mv3 near-black">
          Pylon designs products with intrinsic value.
        </h2>
        <h2 className="f2 f3-m 3-l fw3 black-50 lh-copy mv3 near-black">We solve problems with teams of smart creatives.</h2>
      </header>
      <DisplayBox />
    <TitleText />
    </div>
    <Footer />
  </div>
)
