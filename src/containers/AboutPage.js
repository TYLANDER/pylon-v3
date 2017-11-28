import React from 'react';
import Nav2 from '../components/nav2'
import AboutHero from '../components/abouthero'
import DisplayBox from '../components/displaybox2col'
import PhilosophyText from '../components/philosophy-text'
import TeamText from '../components/team-text'
import AboutTyler from '../components/about-tyler'
import Footer3 from '../components/footer3'


export default () => (
  <div className='sans-serif'>
    <Nav2 />
    <AboutHero/>
    <DisplayBox />
    <TeamText />
    <PhilosophyText />
    <AboutTyler />
    <Footer3 />
  </div>
)
