import React from 'react'
import Monoliths from '../images/monoliths_raster.jpg'

const aboutStyle = {
  backgroundImage: `url(${Monoliths})`,
  opacity: '0.87',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

const opacityStyle = {
  backgroundColor: 'rgba(255,255,255,0.65)'
};

export default () => (
<header className='vh-100 dt w-100 sans-serif'>
  <div className='dtc v-mid contain bg-right bg-top vh-75 vh-90-l' style={aboutStyle}>
    <div className='pb5 pb6-m pb7-l pt2 ph2' >
      <div className="tl v-mid mt0 mt4-ns ph4 ph5-m ph6-l">
        <h1 className="mr2 mr4-l f1">Utility for End Users</h1>
          <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">
            Pylon designs products with intrinsic value.
          </h4>
          <h4 className="f4 lh-copy fw4 black-50 mt0 mv3 near-black">We solve problems with teams of smart creatives.</h4>
      </div>
    </div>
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
