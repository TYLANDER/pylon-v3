import React from 'react'
import Background from '../images/portal_raster.jpg'

const divStyle = {
  backgroundImage: `url(${Background})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

export default () => (
<header className='sans-serif'>
  <div className='cover bg-center bg-top vh-75 mt0 mt0-ns' style={divStyle}>
    <div className='pb5 pb6-m pb7-l pt2 ph2' >
      <div className="tc mt0 mt4-ns ph4 ph5-m ph6-l content-center">
      </div>
    </div>
  </div>
</header>
)
