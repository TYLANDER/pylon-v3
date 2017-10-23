import React from 'react';
import Nav2 from '../components/nav2'
import MethodText from '../components/method-text'
import DisplayBox from '../components/displaybox2col'
import Footer from '../components/footer'
import PhilosophyText from '../components/philosophy-text'
import TeamText from '../components/team-text'
import AboutHero from '../components/abouthero'



export default () => (
  <div className='sans-serif'>
    <Nav2 />
    <AboutHero />
    <DisplayBox />
    <PhilosophyText />
    <MethodText />
    <TeamText />
    <Footer />
  </div>
)
