import React from 'react';
import Nav2 from '../components/nav2'
import MethodText from '../components/method-text'
import DisplayBox from '../components/displaybox2col'
import Footer from '../components/footer'
import PhilosophyText from '../components/philosophy-text'
import TeamText from '../components/team-text'



export default () => (
  <div>
    <div className="mw9 center sans-serif debug-grid-16">
      <Nav2 />

        <header className="tl ph6-l mv6 cf">
        <h1 className="f3-m f1-l black-90 mv3 near-black">
          Utility for End Users
        </h1>
        <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">
          Pylon designs products with intrinsic value.
        </h4>
        <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">We solve problems with teams of smart creatives.</h4>
    </header>

      <DisplayBox />
      <PhilosophyText />
      <MethodText />
      <TeamText />
    </div>
    <Footer />
  </div>
)
