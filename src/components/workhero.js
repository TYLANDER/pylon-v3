import React from 'react'
import Bots from '../images/bots_raster.jpg'

const botStyle = {
  backgroundImage: `url(${Bots})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};


export default () => (
<header class="vh-100 dt w-100">
  <div style={botStyle} className="w-100 contain bg-top dtc center">
    <h1 className="f3-m f1-l black-90 mv3 near-black bg-white">
      Making Order from Chaos
    </h1>
    <h4 className="f4 lh-copy fw4 measure-wide mt0 mv3 near-black bg-white">
      Pylon is dedicated to crafting the best possible experience for end users.<br /> We identify and solve impactful problems with Human Centered Design methodologies. We apply solutions through a globally distributed team of smart creatives.
    </h4>
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
