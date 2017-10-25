import React from 'react'
import Bots from '../images/bots_raster.jpg'

const botStyle = {
  backgroundImage: `url(${Bots})`,
  opacity: '0.85',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const opacityStyle = {
  backgroundColor: 'rgba(0,0,0,0.65)'
};

export default () => (
<header class=" dt w-100 mb5">
  <div style={botStyle} className="h5 dtc v-mid tc bg-top cover bg-center ph3 ph4-m ph5-l">
    <h1 style={opacityStyle} className="f3 f-subheadline-l measure lh-title white fw7">
      Making Order from Chaos
    </h1>
  </div>
</header>
)


/* Headline text removed for testing hero images

  <h1 className="f2 f1-l fw2 black-90 mb0 pt6 lh-title">Product Design and Development</h1>
  <h2 class="fw1 f3 black-80 mt3 mb4">This site could be fancy, but really its just a sign. Email me bruh.</h2>
  <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Email Pylon</a>
  <span className="dib v-mid ph3 white-70 mb3">or</span>
  <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="http://thecatapi.com/api/images/get?format=src&type=gif">Look at a Cat</a>

 */
